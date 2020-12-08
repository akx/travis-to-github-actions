/* eslint-disable no-template-curly-in-string */
import { ConvertContext } from "./types";
import { Job } from "../types/github-workflow";

function convertPythonSetup(ctx: ConvertContext, job: Job) {
  const { travis, messages } = ctx;
  if (travis.language === "python" || travis.python) {
    // TODO: parse used versions
    messages.push({
      type: "info",
      text: "Python versions are not yet parsed from the Travis configuration.",
    });
    job.strategy.matrix["python-version"] = ["3.8"];
    job.steps.push({
      name: "Set up Python ${{ matrix.python-version }}",
      uses: "actions/setup-python@v2",
      with: {
        "python-version": "${{ matrix.python-version }}",
      },
    });
    delete travis.python;
    delete travis.language;
  }
}

function convertNodeSetup(ctx: ConvertContext, job: Job) {
  const { travis, messages } = ctx;

  if (travis.language === "node_js" || travis.node_js) {
    // TODO: parse used versions
    messages.push({
      type: "info",
      text:
        "Node.js versions are not yet parsed from the Travis configuration.",
    });
    job.strategy.matrix["node-version"] = ["14.x"];
    job.steps.push({
      name: "Set up Node.js ${{ matrix.node-version }}",
      uses: "actions/setup-node@v1",
      with: {
        "node-version": "${{ matrix.node-version }}",
      },
    });
    delete travis.node_js;
    delete travis.language;
  }
}

export function convertPerLanguageSetup(ctx: ConvertContext, job: Job) {
  convertPythonSetup(ctx, job);
  convertNodeSetup(ctx, job);
}
