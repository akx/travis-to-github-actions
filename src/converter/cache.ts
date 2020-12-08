/* eslint-disable no-template-curly-in-string */
import { ConvertContext } from "./types";
import { Job } from "../types/github-workflow";
import { arrayfy } from "../utils";

export function convertCache(ctx: ConvertContext, job: Job) {
  if (!ctx.travis.cache) {
    return;
  }
  if (ctx.travis.cache === true) {
    return;
  }
  if (!ctx.travis.cache.directories) {
    return;
  }
  job.steps.push({
    name: "Cache multiple paths",
    uses: "actions/cache@v2",
    with: {
      path: arrayfy(ctx.travis.cache.directories).join("\n"),
      key: "${{ runner.os }}-${{ hashFiles('TODO') }}",
    },
  });
  ctx.messages.push({
    type: "info",
    text: "Please revise the cache key for `actions/cache`.",
  });
}
