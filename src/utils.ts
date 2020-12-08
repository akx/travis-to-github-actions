export function arrayfy<T>(x: T | T[] | undefined): T[] {
  if (x === undefined) return [];
  if (!Array.isArray(x)) return [x];
  return x;
}
