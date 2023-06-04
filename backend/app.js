require("dotenv").config();
const express = require("express");
const connect = require("./config/db")
const app = express();
const userRouter = require("./routes/userRoutes")


// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connect();

app.use("/", userRouter)


module.exports = app;