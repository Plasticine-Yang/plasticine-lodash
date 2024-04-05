import { falsyValues, toArguments } from '@/testing-utils'

import { isObjectLike } from '../is-object-like'

describe('lang - isObjectLike', () => {
  test('should return `true` for objects', () => {
    expect(isObjectLike(toArguments([1, 2, 3]))).toBe(true)
    expect(isObjectLike([1, 2, 3])).toBe(true)
    expect(isObjectLike(Object(false))).toBe(true)
    expect(isObjectLike(new Date())).toBe(true)
    expect(isObjectLike(new Error('oops'))).toBe(true)
    expect(isObjectLike({ a: 1 })).toBe(true)
    expect(isObjectLike(Object(0))).toBe(true)
    expect(isObjectLike(/x/)).toBe(true)
    expect(isObjectLike(Object('a'))).toBe(true)
  })

  test('should return `false` for non-objects', () => {
    const values = (falsyValues as any[]).concat(true, () => {}, 1, 'a', Symbol('foo'))
    const expected = values.map(() => false)

    const actual = values.map((value) => isObjectLike(value))

    expect(actual).toEqual(expected)
  })
})
