const express = require("express")
const courseRouter = require("./routes/courseListing.route")
const connection = require("./config/db")
const cors = require("cors")
const app = express()
require("dotenv").config()
app.use(express.json())
app.use(cors())

app.use("/", courseRouter)
PORT = 4000;
app.get("/home", (req, res) => {
    res.send("Welcome to the home page!");
});
app.listen(PORT, async (error) => {
    if (error) {
        console.log(error)
    }
    try {
        await connection;
        console.log(`Server is connected to the Database and is running at port ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})

