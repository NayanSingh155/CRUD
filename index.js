const express = require("express")
const fs=require("fs")
const app= express()
// app.use(express.json())//middleware

app.get("/data",(req,res)=>{
    const dataStream=fs.createReadStream("./data.json","utf-8")
    dataStream.pipe(res)
    // res.send("<h1>This is Our Home page</h1>")
})

app.post("/adddata",(req,res)=>{
    console.log(req.body)
    res.send("data has been added")
})

app.listen(8080,()=>{
    console.log("server is running at port 8080")
})