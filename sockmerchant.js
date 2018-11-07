function sockmerchant(n, ar){
    let pairs = 0
    for (let i = 0; i < n; i+= 1){
        ar.push(Math.floor(Math.random() * 10))
    }
    for(let i = 0; i < ar.length; i+= 1){
        let many=0;
        let a = ar[i]
        for(let j = i+1; j < ar.length; j+= 1){
            if(a === ar[j]){

            }
        }
    }
    console.log(ar)
}

let n = 10
let ar = []
for (let i = 0; i < n; i+= 1){
    ar.push(Math.floor(Math.random() * 10))
}
sockmerchant(n, ar)
