const diagonalDifference = require('./diagonalDiference')

test('should return diagonal Difference', () => {
    let ar = [[1, 2, 3],[4, 5, 6],[9, 8, 9]]
    expect(diagonalDifference(ar)).toBe(2)
})