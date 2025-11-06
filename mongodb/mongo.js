import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
const PORT = 3000;

dotenv.config();
const app = express();

app.use(express.json())

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err)
})

app.listen(PORT,()=>{
    console.log('server is listening on port 3000')
})