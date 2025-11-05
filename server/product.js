import express from "express"
import fs from "fs"

const PORT = 3000;
const app = express()

app.get("/",(req,res)=>{
    res.send("hi from server")
})
app.get("/product",(req,res)=>{
    fs.readFile("product.json","utf-8",(err,data)=>{
        if(err){
            res.status(500).send("error reading file")
        }else{
            res.send(JSON.parse(data))
        }
    })
})

app.listen(PORT,()=>{
    console.log(`server initiated at PORT : ${PORT}`)
})