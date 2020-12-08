import { ConvertContext } from "./types";

export function processPrelude(ctx: ConvertContext) {
  const { travis, messages } = ctx;
  if (travis.sudo) {
    messages.push({ type: "info", text: "Ignoring `sudo`" });
  }
  delete travis.sudo;
  if (travis.dist) {
    messages.push({ type: "info", text: "Ignoring `dist`" });
  }
  delete travis.dist;
}
