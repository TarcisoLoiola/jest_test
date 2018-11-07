function diagonalDifference(ar) {
    let l_to_r = 0
    let r_to_l = 0
    let l_to_r_Index = 0
    let r_to_l_Index = ar[0].length-1

    for(let i = 0; i<ar.length; i+=1){
        for(let j = 0; j<ar.length; j+=1){
            if( j === l_to_r_Index ) l_to_r += ar[i][j]
            if( j === r_to_l_Index ) r_to_l += ar[i][j]
        }
        l_to_r_Index += 1
        r_to_l_Index -= 1
    }
    let res = l_to_r - r_to_l 
    if( res < 0) res *= -1
    return  res
}
module.exports=diagonalDifference

diagonalDifference([[1, 2, 3],[4, 5, 6],[9, 8, 9]])