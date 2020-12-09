/* eslint-disable no-template-curly-in-string */
import { ConvertContext, JobContext } from "./types";
import { Job } from "./types/github-workflow";
import { convertPerLanguageSetup } from "./languageSetup";
import { convertCache } from "./cache";
import { convertEnvironmentVariables } from "./env";
import { convertJobSteps } from "./steps";
import { buildStrategy } from "./strategy";

export function convertJob(ctx: ConvertContext): Job {
  const jobContext: JobContext = {
    ...ctx,
    steps: [],
    environmentVariableCombinations: [],
    environmentVariables: {},
    matrixAspects: {
      os: ["ubuntu-18.04"],
    },
  };
  convertEnvironmentVariables(jobContext);
  convertPerLanguageSetup(jobContext);
  convertCache(jobContext);
  convertJobSteps(jobContext);
  return {
    "runs-on": "${{ matrix.os }}",
    strategy: buildStrategy(jobContext),
    steps: jobContext.steps,
  };
}
