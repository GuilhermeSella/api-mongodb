const express = require("express")
const conn = require("./db/conn.js")
const router = require("./routes/router.js")

const app = express();



app.use(express.json())
app.use("/", router)


app.listen(8000)
