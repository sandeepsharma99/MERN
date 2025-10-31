import express from "express"
import nodemailer from "nodemailer"

const PORT = 3000;

const app = express();

app.get("/",(req,res)=>{
    res.send("hello world")
});
console.log(nodemailer)
//Transport setup
const transport = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"ssyugedu@gmail.com",
        pass:"ufks zbte xqmu ixfz"
    }
})
const mailOption = {
    from : "ssyugedu@gmail.com",
    to:"sandeepsharma9182@gmail.com",
    subject: "test mail",
    text:"This is text mail sent from Node.js"
}
transport.sendMail(mailOption,(error,info)=>{
    if(error){
        console.log(error)
    }else{
        console.log("email sent: "+ info.response)
    }
})


app.listen(PORT,()=>{
    console.log('server is listening on port 3000')
})