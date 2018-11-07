const staircase = require('./staircase')

test('shold return a Christimas Tree', () => {
    expect(staircase()).toEqual(expect.stringContaining('#'))
})