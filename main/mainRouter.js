const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

const billRouter = require("../bill/index");
const bookRouter = require("../book/index");
app.get("/",(req,res)=>{
    res.send("main get")
})

app.use("/",billRouter);
app.use("/",bookRouter)
app.listen(1302,()=>{
    console.log("server running");
})