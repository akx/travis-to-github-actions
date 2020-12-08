/* eslint-disable no-template-curly-in-string */
import { ConvertContext, JobContext } from "./types";
import { Job } from "../types/github-workflow";
import { convertPerLanguageSetup } from "./languageSetup";
import { arrayfy } from "../utils";
import { convertCache } from "./cache";

function convertJobSteps(ctx: JobContext) {
  const { travis, messages, job } = ctx;
  const { steps } = job;
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

export function convertJob(ctx: ConvertContext): Job {
  const job: Job = {
    "runs-on": "${{ matrix.os }}",
    strategy: {
      matrix: {
        os: ["ubuntu-18.04"],
        exclude: [],
      },
    },
    steps: [
      {
        uses: "actions/checkout@v2",
      },
    ],
  };
  const jobContext: JobContext = {
    ...ctx,
    job,
    environmentVariableCombinations: [],
  };
  convertPerLanguageSetup(jobContext);
  convertCache(jobContext);
  convertJobSteps(jobContext);
  return job;
}
