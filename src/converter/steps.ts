import { JobContext } from "./types";
import { Step } from "../types/github-workflow";
import { arrayfy } from "../utils";

function getStepEnvFragment(ctx: JobContext) {
  if (!Object.keys(ctx.environmentVariables).length) {
    return undefined;
  }
  return Object.fromEntries(
    Object.keys(ctx.environmentVariables).map((v) => [v, `$\{{ matrix.${v} }}`])
  );
}

export function convertJobSteps(ctx: JobContext) {
  const { travis, messages, steps } = ctx;
  const env = getStepEnvFragment(ctx);

  function maybeInjectEnv(step: Step): Step {
    // If the step looks like it uses an environment variable, inject all of them into the step
    if (env && step.run && step.run.includes("$")) {
      step.env = env;
    }
    return step;
  }

  arrayfy(travis.install).forEach((command) => {
    steps.push(
      maybeInjectEnv({
        run: command,
      })
    );
  });
  delete travis.install;

  arrayfy(travis.script).forEach((command) => {
    steps.push(
      maybeInjectEnv({
        run: command,
      })
    );
  });
  delete travis.script;
  if (travis.after_success) {
    arrayfy(travis.after_success).forEach((command) => {
      steps.push(
        maybeInjectEnv({
          run: command,
        })
      );
    });
    messages.push({
      type: "warning",
      text: "After-success are concatenated onto regular steps",
    });
    delete travis.after_success;
  }
}
