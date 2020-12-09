import { JobContext } from "./types";
import { Step } from "./types/github-workflow";
import { arrayfy } from "./utils";
import { Travis } from "./types/travis";

function getStepEnvFragment(ctx: JobContext) {
  if (!Object.keys(ctx.environmentVariables).length) {
    return undefined;
  }
  return Object.fromEntries(
    Object.keys(ctx.environmentVariables).map((v) => [v, `$\{{ matrix.${v} }}`])
  );
}

const stepSources: (keyof Travis)[] = [
  "before_install",
  "install",
  "before_script",
  "script",
  "after_script",
  "after_success",
];

const sourceWarnings: Record<string, string> = {
  after_success: "after_success actions were concatenated",
  before_install: "before_install actions were prepended",
};

function convertJobStepArray(
  ctx: JobContext,
  sourceName: keyof Travis,
  stepModifier: (step: Step) => Step
) {
  // TODO: would be nice to add comments/names for non-script steps
  let stepsGenerated = 0;
  arrayfy(ctx.travis[sourceName]).forEach((command) => {
    if (typeof command !== "string") {
      ctx.messages.push({
        type: "warning",
        text: `Entry not a string in ${sourceName}: ${command}`,
      });
      return;
    }
    ctx.steps.push(
      stepModifier({
        run: command,
      })
    );
    stepsGenerated++;
  });
  if (stepsGenerated > 0) {
    delete ctx.travis[sourceName];
    const warning = sourceWarnings[sourceName];
    if (warning) {
      ctx.messages.push({
        type: "warning",
        text: warning,
      });
    }
  }
  return stepsGenerated;
}

export function convertJobSteps(ctx: JobContext) {
  const env = getStepEnvFragment(ctx);

  const maybeInjectEnv = (step: Step): Step => {
    // If the step looks like it uses an environment variable, inject all of them into the step
    if (env && step.run && step.run.includes("$")) {
      step.env = env;
    }
    return step;
  };

  ctx.steps.push({
    uses: "actions/checkout@v2",
  });

  for (let source of stepSources) {
    convertJobStepArray(ctx, source, maybeInjectEnv);
  }
}
