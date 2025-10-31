import express from "express"
import multer from "multer"

const PORT = 3000;
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// const upload = multer({dest : "uploads/"});

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/")
    },
        filename:function(req,file,cb){
            cb(null,Date.now()+"-"+file.originalname)
        }
    })

const upload=multer({storage:storage})

app.get("/",(req,res)=>{
    res.end("hiii")
})

app.post("/login",upload.single("dp"),(req,res)=>{
    res.end("file uploaded")
})

app.listen(PORT,()=>{
    console.log("server is running")
})