import express from "express"
const PORT = 3000
const server = express()

app.get("/",(req,res)=>{
    res.send("hello world")
})

server.listen(PORT ,()=>{
    console.log("server initiated")
})