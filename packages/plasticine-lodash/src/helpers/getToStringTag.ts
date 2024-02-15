/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
export function getToStringTag(value: any): string {
  return Object.prototype.toString.call(value)
}
