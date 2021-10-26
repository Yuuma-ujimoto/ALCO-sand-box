

const array = [1,12,23,34,45,56]

// in はindexを表示
for (let A in array){
    console.log(A)
}
// ofは中身を取り出す。
for (let B of array){
    console.log(B)
}
// ofと同じだが挙動に差がある
array.forEach(C=>{
    console.log(C)
})

const object = {
    "1":1,
    "22":12,
    "333":123,
    "4444":1234,
    "55555":12345,
    "66666":123456
}

// Objectをin ofでfor文で回しても値を取れない
// 代わりにKeyが取れる
for (let D in object){
    console.log(D)
}

for(let E in object){
    console.log(E)
}
// こうすればValueを上から順に取れる。
for (let F in object){
    console.log(object[F])
}

