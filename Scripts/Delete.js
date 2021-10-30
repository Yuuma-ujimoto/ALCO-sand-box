const arrayA = [1,2,3]

console.log(arrayA)

delete arrayA[0]

console.log(arrayA)
//[ <1 empty item>, 2, 3 ]

const arrayB =[...arrayA]

console.log(arrayB)
// [ undefined, 2, 3 ]

const obj = {
    "a":"hoge",
    "b":"fuga",
    "c":"piyo"
}
console.log(obj)
delete obj.a

console.log(obj)

let arrayC = ["hoge","piyo","fuga"]

console.log(arrayC)

// 配列から値を完全に取り除くにはspliceを使う
arrayC.splice(1,1)
console.log(arrayC)
//[ 'hoge', 'fuga' ]