const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const userRouter = require("./Routers/users")
const bookRouter = require("./Routers/books")

const app = express()
app.use(bodyParser.json())

const url = "mongodb+srv://yousefsayed0:456789456@app-11.kjdk1.mongodb.net/?retryWrites=true&w=majority&appName=app-11"
const connectToDB = async () => {
    try {
        mongoose.set("strictQuery" , false)
        mongoose.connect(url)
        console.log("you are connected with Now DB")
    } catch(err) {
        console.error(err)
        res.status(400).json({message:"please try again later"})
    }
}
connectToDB()

app.use("/" , userRouter)
app.use("/" , bookRouter)

app.listen(8887)
