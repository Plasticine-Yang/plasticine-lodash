import { getToStringTag } from '@/helpers'

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */
export function isSymbol(value: any): value is Symbol {
  const type = typeof value
  return type === 'symbol' || (type === 'object' && value != null && getToStringTag(value) === '[object Symbol]')
}
