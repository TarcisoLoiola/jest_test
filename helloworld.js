function helloworld(n){
    let str = 'HelloWorld'
    let newStr = []
    for (let i =0;i<n;i+=1){
        let dash = ''
        if(n > 1 && i < n-1 ){
            dash = '-'
        }
        newStr.push(str+dash)
    }
    let myConcat = newStr.join("", " ")
    return myConcat
}

module.exports = helloworld

console.log(helloworld(2))
