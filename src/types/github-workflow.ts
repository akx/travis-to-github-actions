export interface Job {
  "runs-on": string;
  strategy: Strategy;
  env?: Record<string, string>;
  steps: Step[];
}

export interface Step {
  uses?: string;
  name?: string;
  with?: object;
  run?: string;
  env?: Record<string, string>;
}

export interface Strategy {
  matrix: Matrix;
}

export interface Matrix {
  [key: string]: any;
  os?: string[];
  exclude?: object[];
  include?: object[];
}

export interface GithubWorkflow {
  name: string;
  on: {
    push?: { branches: string[] };
    pull_request?: { branches: string[] };
  };
  jobs: Record<string, Job>;
}
