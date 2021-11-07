const mysql = require("mysql2/promise")


const sql =async ()=>{
    const connection = await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"alco"
    })


    const SQL = ""
    const [Result,] = await connection.query(SQL)
    console.log(Result)
    await connection.end()
}


sql().then()