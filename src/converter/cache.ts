/* eslint-disable no-template-curly-in-string */
import { JobContext } from "./types";
import { arrayfy } from "../utils";

export function convertCache(ctx: JobContext) {
  const { travis, steps, messages } = ctx;
  if (!travis.cache) {
    return;
  }
  if (travis.cache === true) {
    return;
  }
  if (!travis.cache.directories) {
    return;
  }
  steps.push({
    name: "Cache multiple paths",
    uses: "actions/cache@v2",
    with: {
      path: arrayfy(travis.cache.directories).join("\n"),
      key: "${{ runner.os }}-${{ hashFiles('TODO') }}",
    },
  });
  messages.push({
    type: "info",
    text: "Please revise the cache key for `actions/cache`.",
  });
  delete travis.cache;
}
