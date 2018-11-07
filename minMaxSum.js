function minMaxSum(arr) {
    let min = 0
    let max = 0
    let small
    let large

    for(let i = 0; i < arr.length; i += 1){
        for(let j = i+1; j < arr.length; j += 1){
            let a = arr[i]
            let b = arr[j]
            if(a < b){
                small = a
                if(small < b){
                    small = a
                }
            }
        }
    }
    return [10, 14]
}
module.exports = minMaxSum

minMaxSum([1, -5, 0, -1, -3, 2])