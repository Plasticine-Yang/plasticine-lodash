import { falsyValues } from '@/testing-utils'
import { slice } from '../slice'

describe('array - slice', () => {
  const array = [1, 2, 3]

  test('should use a default `start` of `0` and a default `end` of `length`', () => {
    const actual = slice(array)
    expect(actual).toEqual(array)
    expect(actual).not.toBe(array)
  })

  test('should work with a positive `start`', () => {
    expect(slice(array, 1)).toEqual([2, 3])
    expect(slice(array, 1, 3)).toEqual([2, 3])
  })

  test('should work with a `start` >= `length`', () => {
    for (const start of [3, 4, 2 ** 32, Infinity]) {
      expect(slice(array, start)).toEqual([])
    }
  })

  // test('should treat falsy `start` values as `0`', () => {
  //   for (const start of falsyValues) {
  //     expect(
  //       // @ts-ignore
  //       slice(array, start),
  //     ).toEqual(array)
  //   }
  // })

  test('should work with a negative `start`', () => {
    expect(slice(array, -1)).toEqual([3])
  })

  test('should work with a negative `start` <= negative `length`', () => {
    for (const start of [-3, -4, -Infinity]) {
      expect(slice(array, start)).toEqual(array)
    }
  })

  test('should work with `start` >= `end`', () => {
    for (const start of [2, 3]) {
      expect(slice(array, start, 2)).toEqual([])
    }
  })

  test('should work with a positive `end`', () => {
    expect(slice(array, 0, 1)).toEqual([1])
  })

  test('should work with a `end` >= `length`', () => {
    for (const end of [3, 4, 2 ** 32, Infinity]) {
      expect(slice(array, 0, end)).toEqual(array)
    }
  })

  test('should treat falsy `end` values, except `undefined`, as `0`', () => {
    const expected = falsyValues.map((falsyValue) => (falsyValue === undefined ? array : []))
    const actual = falsyValues.map((end) =>
      // @ts-ignore
      slice(array, 0, end),
    )

    expect(actual).toEqual(expected)
  })

  test('should work with a negative `end`', () => {
    expect(slice(array, 0, -1)).toEqual([1, 2])
  })

  test('should work with a negative `end` <= negative `length`', () => {
    for (const end of [-3, -4, -Infinity]) {
      expect(slice(array, 0, end)).toEqual([])
    }
  })

  // test('should coerce `start` and `end` to integers', () => {
  //   const positions = [
  //     [0.1, 1.6],
  //     [NaN, 1],
  //     [1, NaN],
  //   ]

  //   const actual = positions.map(([start, end]) => slice(array, start, end))
  //   slice(array, NaN, 1)

  //   expect(actual).toEqual([[1], [1], []])
  // })
})
