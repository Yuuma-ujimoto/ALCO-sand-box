//　これを
let x ={
    "0":{post_id: 2},
    "1":{post_id: 3}
}

//　こうしたい
let r = [2,3]

let R = []
for (let o of Object.keys(x)){
    R.push(x[o].post_id)
}
console.log(R)