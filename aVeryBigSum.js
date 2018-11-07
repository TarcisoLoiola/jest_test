function aVeryBigSum(ar) {
    let sum = 0
    for(let i = 0; i < ar.length; i+=1){
        sum += ar[i]
    }
    return sum
}

module.exports = aVeryBigSum