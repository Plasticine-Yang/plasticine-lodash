import { isObject } from './is-object'
import { isSymbol } from './is-symbol'

/** Used to detect bad signed hexadecimal string values. */
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i

/** Used to detect binary string values. */
const reIsBinary = /^0b[01]+$/i

/** Used to detect octal string values. */
const reIsOctal = /^0o[0-7]+$/i

/**
 * Converts `value` to a number.
 *
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * toNumber(3.2)
 * // => 3.2
 *
 * toNumber(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toNumber(Infinity)
 * // => Infinity
 *
 * toNumber('3.2')
 * // => 3.2
 */
export function toNumber(value: any): number {
  if (typeof value === 'number') {
    return value
  }

  if (isSymbol(value)) {
    return NaN
  }

  if (isObject(value)) {
    const other = typeof value.valueOf === 'function' ? value.valueOf() : value
    value = isObject(other) ? `${other}` : other
  }

  if (typeof value !== 'string') {
    return value === 0 ? value : +value
  }

  value = value.trim()
  const isBinary = reIsBinary.test(value)
  const isOctal = reIsOctal.test(value)

  return isBinary || isOctal ? parseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NaN : +value
}
