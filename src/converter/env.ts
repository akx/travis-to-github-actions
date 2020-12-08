import { JobContext } from "./types";

export function convertEnvironmentVariables(ctx: JobContext) {
  if (
    Array.isArray(ctx.travis.env) &&
    ctx.travis.env.every((e) => typeof e === "string")
  ) {
    ctx.travis.env.forEach((envStr) => {
      if (typeof envStr !== "string") return;
      const vars = Object.fromEntries(
        envStr.split(/\s+/).map((s) => {
          const match = /^(.+?)=(.+)$/.exec(s);
          return match ? [match[1], match[2]] : [s, "1"];
        })
      );
      ctx.environmentVariableCombinations.push(vars);
      Object.keys(vars).forEach((v) => {
        ctx.environmentVariables[v] = true;
      });
    });
    delete ctx.travis.env;
  }
}
