const mysql = require("mysql2/promise")


const sql =async ()=>{
    const connection = await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    })


    const SQL = "insert c(text) value(?)"
    const [Result,] = await connection.query(SQL,["hoge"])
    console.log(Result)

    //ResultSetHeader {
    //   fieldCount: 0,
    //   affectedRows: 1,
    //   insertId: 2, AutoIncrementのIdの取得に成功
    //   info: '',
    //   serverStatus: 2,
    //   warningStatus: 0
    // }

    await connection.end()
}


sql().then()