import { toNumber } from '../to-number'

describe('lang - toNumber', () => {
  test('should convert values to number', () => {
    expect(toNumber(3.2)).toBe(3.2)
    expect(toNumber(1e10)).toBe(1e10)
    expect(toNumber(0b01)).toBe(0b01)
    expect(toNumber(0o10)).toBe(0o10)
    expect(toNumber(0x10)).toBe(0x10)
    expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE)
    expect(toNumber(Infinity)).toBe(Infinity)
    expect(toNumber(NaN)).toBe(NaN)
    expect(toNumber('3.2')).toBe(3.2)
    expect(toNumber(false)).toBe(0)
    expect(toNumber(true)).toBe(1)
    expect(toNumber(Symbol('foo'))).toBe(NaN)
    expect(toNumber({})).toBe(NaN)
    expect(toNumber([])).toBe(0)
  })

  test('should convert array to number with only single value', () => {
    expect(toNumber([0])).toBe(0)
    expect(toNumber([1])).toBe(1)
    expect(toNumber([2])).toBe(2)
    expect(toNumber([3])).toBe(3)
    expect(toNumber([1, 2, 3])).toBe(NaN)
  })
})
