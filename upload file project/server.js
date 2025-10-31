import multer, { diskStorage } from "multer"
import express from "express"
const PORT = 3000;


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cd(null,"uploads/")
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname)
    }
}
)

app.post("/uploads",upload.single("dp"),(req,res)=>{
    res.send("file upload")
})

app.listen(PORT,()=>{
    console.log('server is listening on port 3000')
})