const component = require('./component')
const name = 'Tarciso'

test(`Should return greetings`, () => {
    expect(component(name)).toEqual(`Hello ${name}`)
})