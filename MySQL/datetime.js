const mysql = require("mysql2/promise")


const sql =async ()=>{
    const connection = await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"alco"
    })


    const SQL = "select created_at from user where user_id = 2"
    const [Result,] = await connection.query(SQL)
    console.log(Result)
    const SQL2 = "select * from user where created_at > ?"
    const [Result2,] = await connection.query(SQL2,[Result[0].created_at])
    console.log(Result2)
    await connection.end()
}


sql().then()