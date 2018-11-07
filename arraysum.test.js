const arraysum = require('./arraysum')

test('shold return a sum of array', () => {
    let ar=[2,2]
    expect(arraysum(ar)).toBe(4)
})