import { falsyValues, toArguments } from '@/testing-utils'

import { isObject } from '../is-object'

describe('lang - isObject', () => {
  test('should return `true` for objects', () => {
    expect(isObject(toArguments([1, 2, 3]))).toBe(true)
    expect(isObject([1, 2, 3])).toBe(true)
    expect(isObject(Object(false))).toBe(true)
    expect(isObject(new Date())).toBe(true)
    expect(isObject(new Error('oops!'))).toBe(true)
    expect(isObject(Array.prototype.slice)).toBe(true)
    expect(isObject({ a: 1 })).toBe(true)
    expect(isObject(Object(0))).toBe(true)
    expect(isObject(/x/)).toBe(true)
    expect(isObject(Object('a'))).toBe(true)
    expect(isObject(Object(Symbol('foo')))).toBe(true)
  })

  test('should return `false` for non-objects', () => {
    const values = (falsyValues as any[]).concat(true, 1, 'foo', Symbol('foo'))
    const expected = values.map(() => false)
    const actual = values.map((value) => isObject(value))

    expect(actual).toEqual(expected)
  })
})
