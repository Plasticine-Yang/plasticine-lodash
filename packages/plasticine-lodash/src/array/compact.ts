/**
 *
 * @param {Array} array The array to compact.
 * @returns {Array} Return the new array of filtered values.
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
