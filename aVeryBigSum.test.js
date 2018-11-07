const aVeryBigSum = require('./aVeryBigSum')

test('should return sum of large array numbers', () => {
    let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
    expect(aVeryBigSum(ar)).toBe(5000000015)
})