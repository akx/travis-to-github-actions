/* eslint-disable no-template-curly-in-string */
import { safeDump, safeLoad } from "js-yaml";
import { Travis } from "./types/travis";
import { ConvertContext, ConvertResult } from "./types";
import { GithubWorkflow } from "./types/github-workflow";
import { processPrelude } from "./prelude";
import { convertJob } from "./job";

function makeContext(travisYaml: string): ConvertContext {
  const travis = (safeLoad(travisYaml) as unknown) as Travis;
  const github: GithubWorkflow = {
    name: "Converted Workflow",
    on: {
      push: {
        branches: ["master"],
      },
      pull_request: {
        branches: ["master"],
      },
    },
    jobs: {},
  };
  return { travis, messages: [], github };
}

export function convertToGHA(travisYaml: string): ConvertResult {
  travisYaml = travisYaml.trim();
  if (!travisYaml.length) {
    return { yaml: "", messages: [] };
  }
  const ctx = makeContext(travisYaml);
  const { travis, messages, github } = ctx;
  processPrelude(ctx);
  github.jobs["Build"] = convertJob(ctx);

  return {
    yaml: safeDump(github),
    messages,
    remainingTravis:
      travis && Object.keys(travis).length ? safeDump(travis) : undefined,
  };
}
