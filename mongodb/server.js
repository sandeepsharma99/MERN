import express from "express"
import mongoose from "mongoose"
const PORT = 3000;


const app = express();

mongoose.connect("mongodb+srv://sandeepsharma9182:sandeep123@e-comm.fokiduj.mongodb.net/"

).then(()=>{
    console.log("mongooes is connected")
}
).catch((err)=>{
    console.log("err")
});


app.listen(PORT,()=>{
    console.log('server is listening on port 3000')
})