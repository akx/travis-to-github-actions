import { JobContext } from "./types";
import { Strategy } from "../types/github-workflow";
import { permutations } from "../utils";

function expandMatrixIntoIncludes(jobContext: JobContext) {
  const finalMatrixAspects: Record<string, any[]> = {
    ...jobContext.matrixAspects,
    $env$: jobContext.environmentVariableCombinations,
  };
  const aspectKeys = Object.keys(finalMatrixAspects);
  const aspectValues = Object.values(finalMatrixAspects);
  const includes: any[] = [];
  permutations(aspectValues, (combo) => {
    const include: Record<string, string> = {};
    aspectKeys.forEach((key, index) => {
      const value = combo[index];
      if (key === "$env$" && typeof value === "object") {
        Object.assign(include, value);
      } else {
        include[key] = value;
      }
    });
    includes.push(include);
  });
  return includes;
}

export function buildStrategy(jobContext: JobContext): Strategy {
  if (jobContext.environmentVariableCombinations.length) {
    return {
      matrix: {
        include: expandMatrixIntoIncludes(jobContext),
      },
    };
  }
  return {
    matrix: {
      ...jobContext.matrixAspects,
    },
  };
}
