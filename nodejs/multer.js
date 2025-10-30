import express from "express"
import multer from "multer"

const PORT = 3000;
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const upload = multer({dest : "uploads/"});

app.get("/",(req,res)=>{
    res.send("hiii")
})

app.post("/login",upload.single("dp"),(req,res)=>{
    res.send("file uploaded")
})

app.listen(PORT,()=>{
    console.log("server is running")
})