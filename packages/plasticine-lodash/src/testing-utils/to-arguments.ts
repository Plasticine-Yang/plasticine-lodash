/**
 * Converts `array` to an `arguments` object.
 *
 * @private
 * @param {Array} array The array to convert.
 * @returns {Object} Returns the converted `arguments` object.
 */
export function toArguments(array: any[]): IArguments {
  // eslint-disable-next-line prefer-spread, @typescript-eslint/no-unused-vars
  return function (...args: any[]): IArguments {
    // eslint-disable-next-line prefer-rest-params
    return arguments
  }.apply(undefined, array)
}
