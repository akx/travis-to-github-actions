/* eslint-disable no-template-curly-in-string */
import { JobContext } from "./types";
import { arrayfy } from "../utils";

function convertPythonSetup(ctx: JobContext) {
  const { travis, matrixAspects, steps } = ctx;
  if (travis.language === "python" || travis.python) {
    matrixAspects["python-version"] = arrayfy<string>(travis.python, ["3.8"]);
    steps.push({
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

function convertNodeSetup(ctx: JobContext) {
  const { travis, messages, steps, matrixAspects } = ctx;

  if (travis.language === "node_js" || travis.node_js) {
    // TODO: parse used versions
    messages.push({
      type: "info",
      text:
        "Node.js versions are not yet parsed from the Travis configuration.",
    });
    matrixAspects["node-version"] = ["14.x"];
    steps.push({
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

export function convertPerLanguageSetup(ctx: JobContext) {
  convertPythonSetup(ctx);
  convertNodeSetup(ctx);
}
