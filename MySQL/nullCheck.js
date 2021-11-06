const mysql = require("mysql2/promise")


const x =async ()=>{
    const connection = await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"alco"
    })
    console.log("a")
    // Nullが帰ってくるSQLの実行結果->[]
    const [r,] = await connection.query("select * from post where user_id = 5")
    console.log(r)
}

x().then()