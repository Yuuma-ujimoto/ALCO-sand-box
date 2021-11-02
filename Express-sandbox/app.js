const express = require("express")
const app = express()
const path = require("path")
app.use("/test",express.static(path.join(__dirname,"/test")))

app.listen(3000)