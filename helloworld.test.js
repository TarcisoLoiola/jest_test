const helloworld = require('./helloworld')

test('shold return a string "hello world"', () => {
    expect(helloworld(2)).toBe('HelloWorld-HelloWorld')
})
