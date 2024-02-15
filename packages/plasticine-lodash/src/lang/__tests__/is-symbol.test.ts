import { falsyValues, toArguments } from '@/testing-utils'

import { isSymbol } from '../is-symbol'

describe('lang - isSymbol', () => {
  test('should return `true` for symbols', () => {
    expect(isSymbol(Symbol('foo'))).toBe(true)
    expect(isSymbol(Object(Symbol('foo')))).toBe(true)
  })

  test('should return `false` for non-symbols', () => {
    const expected = falsyValues.map(() => false)
    const actual = falsyValues.map((value) => isSymbol(value))
    expect(actual).toEqual(expected)

    expect(isSymbol(toArguments([1, 2, 3]))).toBe(false)
    expect(isSymbol([1, 2, 3])).toBe(false)
    expect(isSymbol(true)).toBe(false)
    expect(isSymbol(new Date())).toBe(false)
    expect(isSymbol(new Error('oops'))).toBe(false)
    expect(isSymbol(Array.prototype.slice)).toBe(false)
    expect(isSymbol({ 0: 1, length: 1 })).toBe(false)
    expect(isSymbol(1)).toBe(false)
    expect(isSymbol(/x/)).toBe(false)
    expect(isSymbol('a')).toBe(false)
  })
})
