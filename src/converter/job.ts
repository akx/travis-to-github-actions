/* eslint-disable no-template-curly-in-string */
import { ConvertContext, JobContext } from "./types";
import { Job, Strategy } from "../types/github-workflow";
import { convertPerLanguageSetup } from "./languageSetup";
import { arrayfy } from "../utils";
import { convertCache } from "./cache";

function convertJobSteps(ctx: JobContext) {
  const { travis, messages, steps } = ctx;
  arrayfy(travis.install).forEach((command) => {
    steps.push({
      run: command,
    });
  });
  delete travis.install;

  arrayfy(travis.script).forEach((command) => {
    steps.push({
      run: command,
    });
  });
  delete travis.script;
  if (travis.after_success) {
    arrayfy(travis.after_success).forEach((command) => {
      steps.push({
        run: command,
      });
    });
    messages.push({
      type: "warning",
      text: "After-success are concatenated onto regular steps",
    });
    delete travis.after_success;
  }
}

function buildStrategy(jobContext: JobContext): Strategy {
  return {
    matrix: {
      os: ["ubuntu-18.04"],
      ...jobContext.matrixAspects,
    },
  };
}

export function convertJob(ctx: ConvertContext): Job {
  const jobContext: JobContext = {
    ...ctx,
    steps: [],
    environmentVariableCombinations: [],
    matrixAspects: {},
  };
  convertPerLanguageSetup(jobContext);
  convertCache(jobContext);
  convertJobSteps(jobContext);
  return {
    "runs-on": "${{ matrix.os }}",
    strategy: buildStrategy(jobContext),
    steps: jobContext.steps,
  };
}
