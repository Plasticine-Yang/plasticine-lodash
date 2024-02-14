/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, RegExps, `new Number(0)`, and `new String('')`)
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({})
 * // => true
 *
 * _.isObject([1, 2, 3])
 * // => true
 *
 * _.isObject(_.noop)
 * // => true
 *
 * _.isObject(null)
 * // => false
 */
export function isObject(value?: any): value is object {
  const type = typeof value

  return value !== null && (type === 'object' || type === 'function')
}
