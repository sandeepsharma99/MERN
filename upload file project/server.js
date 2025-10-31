import multer, { diskStorage } from "multer"
import express from "express"
const PORT = 3000;


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/")
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname)
    }
}
)

const upload = multer({storage:storage})

app.post("/login",
    upload.fields([
        {name:"dp"},
        {name:"avatar"},
        {name:"file"},
    ]),
    (req,res)=>{
        console.log(req.files)
        res.end("file uploaded succesfully")
    }
);


app.listen(PORT,()=>{
    console.log('server is listening on port 3000')
})