const express = require("express")
const app = express()
require("dotenv").config()
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hitting the home route")
})

app.listen(() => {
    console.log(`Server is running at PORT ${process.env.PORT}`)
})

