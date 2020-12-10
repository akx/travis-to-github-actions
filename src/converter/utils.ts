export function arrayfy<T>(
  x: T | T[] | undefined,
  defaultValue: readonly T[] = []
): T[] {
  if (x === undefined) return [...defaultValue];
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

export function deleteIfEmpty<T extends object>(
  obj: T | undefined,
  key: keyof T
) {
  if (
    obj &&
    typeof obj[key] === "object" &&
    Object.keys(obj[key]).length === 0
  ) {
    delete obj[key];
    return true;
  }
  return false;
}
