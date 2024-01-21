/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
export function chunk(array: unknown[], size: number = 1): unknown[][] {
  const result: unknown[][] = []

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }

  return result
}
