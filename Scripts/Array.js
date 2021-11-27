// dataの値が配列じゃなかった場合Dataだけが格納された配列を作る
const data = "aaa"
// constだけで済む上に処理も短くていい感じ
const dataArray = Array.isArray(data) ? data : [data]
console.log(dataArray)