import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
const PORT = 3000
const app = express()

app.get("/",(req,res)=>{
    console.log("hello from server")
})

mongoose.connect(process.env.newMONGODB_URL)
.then(()=>{
    console.log("database connected successfully")
}).catch((err)=>{
    console.log(err)
})

app.listen(PORT,()=>{
    console.log(`Server is initiated at port : ${PORT}`)
})