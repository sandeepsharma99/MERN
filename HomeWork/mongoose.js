import express from "express"
import mongoose from "mongoose"

const PORT = 3000
const app = express()

app.get("/",(req,res)=>{
    res.send("hello form server")
})

mongoose.connect("datbse url")
.then(()=>{
    console.log("dtabase is connected successfully")
}).catch((err)=>{
    console.log(err)
})
 
app.listen(PORT, ()=>{
    console.log("server has inituated at Port 3000")
})