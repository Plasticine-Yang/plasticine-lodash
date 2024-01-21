import { compact } from '../compact'

describe('array - compact', () => {
  test('should filter falsy values', () => {
    const array = ['foo', 'bar', 'baz']
    const falsyValues = [null, undefined, false, 0, NaN, '']

    const result = compact([...array, ...falsyValues])
    expect(result).toEqual(array)
  })
})
