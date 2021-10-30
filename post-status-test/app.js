const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
    optionsSuccessStatus: 200
}))

app.use(express.urlencoded({extended: true, limit: "50mb"}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/view/index.html")
})

app.post("/post", (req, res) => {
    console.log(req.body)
    res.send("post")
    // Result
    // {
    //     text1: 'a',
    //     number1: '1111',
    //     date1: '2021-10-21',
    //     time1: '17:39',
    //     range1: '50'
    // }

})


app.listen(3000)