import { toInteger } from '../to-integer'

describe.skip('lang - toInteger', () => {
  test(`should convert values to integers`, () => {
    expect(toInteger(-5.6)).toBe(-5)
    expect(toInteger('5.6')).toBe(5)
    expect(toInteger()).toBe(0)
    expect(toInteger(NaN)).toBe(0)

    const expected = Number.MAX_SAFE_INTEGER
    expect(toInteger(Infinity)).toBe(expected)
    expect(toInteger(-Infinity)).toBe(-expected)
  })

  test(`should support \`value\` of \`-0\``, () => {
    expect(1 / toInteger(-0)).toBe(-Infinity)
  })
})
