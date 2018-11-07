const comparetriplets = require('./comparetriplets')

test('should return a winner', () => {
    let a = [1,2,3]
    let b = [3,2,1]
    expect(comparetriplets(a,b)).toEqual(expect.arrayContaining([1, 1]))
})