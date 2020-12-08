export function arrayfy<T>(x: T | T[] | undefined): T[] {
  if (x === undefined) return [];
  if (!Array.isArray(x)) return [x];
  return x;
}

export function permutations<T>(
  choices: readonly T[][],
  callback: (combo: readonly T[]) => void,
  prefix: readonly T[] = []
) {
  if (!choices.length) {
    return callback(prefix);
  }
  for (var c = 0; c < choices[0].length; c++) {
    permutations(
      choices.slice(1),
      callback,
      (prefix || []).concat(choices[0][c])
    );
  }
}
