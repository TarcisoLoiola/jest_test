const minMaxSum = require('./minMaxSum')

test('Should return min and max sum of an array', () =>{
    let arr = [1, 2, 3, 4, 5]
    expect(minMaxSum(arr)).toEqual(expect.arrayContaining([10,14]))
})