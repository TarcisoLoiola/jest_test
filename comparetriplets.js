function compareTriplets(a, b) {
    let arSize = a.length;
    if(a.length<b.length){
        arSize = b.length
    }

    let alice = 0
    let bob = 0
    for( let i = 0; i<arSize; i +=1){
        if( a[i] > b[i] || b[i] === undefined){
            alice += 1
        }
        else if(a[i] < b[i] || a[i] === undefined){
            bob += 1
        }
    }
    return [alice, bob]
}

module.exports=compareTriplets

console.log(compareTriplets([1,2,3],[3,2,1]))