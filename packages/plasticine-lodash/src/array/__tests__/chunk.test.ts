import { chunk } from '../chunk'

describe('array - chunk', () => {
  const array = [0, 1, 2, 3, 4, 5]

  test('should return chunked arrays', () => {
    const actual = chunk(array, 3)

    expect(actual).toEqual([
      [0, 1, 2],
      [3, 4, 5],
    ])
  })

  test('should return the last chunk as remaining elements', () => {
    const actual = chunk(array, 4)

    expect(actual).toEqual([
      [0, 1, 2, 3],
      [4, 5],
    ])
  })
})
