const moment = require('moment')

const dateDiff = require('./dateDiff')

const action = moment().format('HH')

const result = getGreeting(action)

function getGreeting(hour){

    if( hour >= 0 && hour < 12 ) return 'Good Morning'
    else if( hour >= 12 && hour < 17 ) return 'Good Afternoon'
    else return 'Good Evenning'
}

console.log(result)

test(``, () => {
    expect(dateDiff(action)).toBe(result)
})