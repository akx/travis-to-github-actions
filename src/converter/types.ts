import { Travis } from "./types/travis";
import { GithubWorkflow, Step } from "./types/github-workflow";

export type ConvertMessage = { type: "info" | "warning"; text: string };

export interface ConvertContext {
  travis: Travis;
  messages: Array<ConvertMessage>;
  github: GithubWorkflow;
}

export interface ConvertResult {
  yaml: string;
  remainingTravis?: string;
  messages: ConvertMessage[];
  error?: string;
  errorDetail?: any;
}

export interface JobContext extends ConvertContext {
  steps: Step[];
  environmentVariableCombinations: Array<Record<string, string>>;
  environmentVariables: Record<string, true>; // Value not used just yet
  matrixAspects: Record<string, string[]>;
}
