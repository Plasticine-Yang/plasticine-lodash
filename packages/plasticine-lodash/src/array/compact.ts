/**
 * Creates an array with all falsy values removed. The values false, null, 0, "", undefined, and NaN are falsy.
 *
 * @param {Array} array The array to compact.
 * @returns {Array} Return the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
export function compact(array: unknown[]): unknown[] {
  const result: unknown[] = []

  for (const item of array) {
    if (item) {
      result.push(item)
    }
  }

  return result
}
