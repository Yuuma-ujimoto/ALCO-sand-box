// dataの値が配列じゃなかった場合Dataだけが格納された配列を作る
const data = "aaa"
// constだけで済む上に処理も短くていい感じ
const dataArray = Array.isArray(data) ? data : [data]
console.log(dataArray)

// 一応他のやり方も載せる

//***************************************************
//わかりやすいけど効率悪いしletなので安全性も薄い
let dataArray2
if (!Array.isArray(data)){
    dataArray2 = [data]
}
else {
    dataArray2 = data
}
//***************************************************
//if文一本で済むけど処理わかりにくいのと安全性がちょっとアレなコード
let dataArray3 = data
if (!Array.isArray(data)){
    dataArray3 = [data]
}