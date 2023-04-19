export const isUndefined = (x: unknown): x is undefined =>
  typeof x === "undefined";
