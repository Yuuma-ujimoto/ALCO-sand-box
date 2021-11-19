

const mysql = require("mysql2/promise")


const sql =async ()=>{
    const connection = await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"alco"
    })


    const SelectQueryPostSQL =
        "select P.post_text,P.post_id,P.created_at,U.account_name,U.display_name " +
        "from post P " +
        "inner join user U on P.user_id = U.user_id " +
        "where U.is_deleted = 0 and P.is_deleted = 0 and P.post_text like ?"
    const [Result,] = await connection.query(SelectQueryPostSQL,["test"])
    console.log(Result)
    let In = "("
    let first = true
    for (let R of Result){
        console.log(R.post_id)
        if (first){
            In+=R.post_id
            first = false
        }
        else {
            In+=","+R.post_id
        }
    }
    console.log(In+")")



    await connection.end()
}


sql().then()