/**
 * Creates a slice of array from start up to, but not including, end.
 *
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of array.
 * @example
 *
 * const array = [1, 2, 3, 4]
 *
 * slice(array, 2)
 * // => [3, 4]
 */
export function slice<T>(array: ArrayLike<T>, start: number = 0, end: number = array.length): T[] {
  let length = array == null ? 0 : array.length

  if (!length) {
    return []
  }

  start = start === null ? 0 : start
  end = end === undefined ? length : end
  if (start < 0) {
    start = -start > length ? 0 : length + start
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  length = start > end ? 0 : (end - start) >>> 0
  start >>>= 0

  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }

  return result
}
