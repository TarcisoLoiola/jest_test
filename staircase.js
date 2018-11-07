// Complete the staircase function below.
function staircase(n) {
    let index = 0
    let setHash = n-1

    for(let i = 0; i<n; i+=1){
        let stair = ''
        for(let j = 0; j<n; j+=1){
            if(j >= setHash) {
                stair += '#'
            }
            else {
                stair += ' '
            }
        }
        // console.log(stair)
        setHash -= 1
    }
    return '#'
}
module.exports = staircase

staircase(6)