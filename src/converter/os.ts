import { JobContext } from "./types";
import { arrayfy } from "./utils";
import { Addons } from "./types/travis";

function consumePackageManagerObject(
  addons: Addons | undefined,
  key: "apt" | "homebrew"
): Set<string> | undefined {
  if (!addons) {
    return;
  }
  let spec = addons[key];
  let packages: Set<string> | undefined;
  if (spec) {
    if (spec === true || spec === false) {
      delete addons[key]; // Nothing to do
    } else if (Array.isArray(spec)) {
      packages = new Set(arrayfy(spec));
      delete addons[key]; // Consume
    } else if (typeof spec === "string") {
      packages = new Set([spec]);
      delete addons[key]; // Consume
    } else {
      packages = new Set(arrayfy(spec.packages));
      delete spec.packages;
    }
  }
  return packages;
}

function convertApt(ctx: JobContext) {
  const aptPackages = consumePackageManagerObject(ctx.travis.addons, "apt");
  if (aptPackages && aptPackages.size) {
    ctx.steps.push({
      name: "Install dependencies (Ubuntu)",
      if: "runner.os == 'Linux'",
      run: [
        "sudo apt-get update",
        "sudo apt-get install -y " + Array.from(aptPackages).sort().join(" "),
      ].join("\n"),
    });
  }
}

function convertHomebrew(ctx: JobContext) {
  const homebrewPackages = consumePackageManagerObject(
    ctx.travis.addons,
    "homebrew"
  );
  if (homebrewPackages && homebrewPackages.size) {
    ctx.steps.push({
      name: "Install dependencies (macOS)",
      if: "runner.os == 'macOS'",
      run: [
        "brew update",
        "brew install " + Array.from(homebrewPackages).sort().join(" "),
      ].join("\n"),
    });
  }
}

export function convertOperatingSystemSetup(ctx: JobContext) {
  convertApt(ctx);
  convertHomebrew(ctx);
}
