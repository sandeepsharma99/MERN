import express from "express"
import nodemailer from "nodemailer"

const PORT = 3000
const server = express()

server.get("/",(req,res)=>{
    res.send("hello world")
})

//transporter setup

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"sandeepsharma9182@gmail.com",
        pass:"your password"  //app password
    }
})
console.log(nodemailer)
//compose message

const mailOption = {
    from:"sandeepsharma9182@gmail.com",
    to:"abc@gmailcom",
    subject:"Test mail",
    text:"This is a test mail sent from Node.js"
} 
// calling transporter to sendmail
transporter.sendMail(mailOption,(err,info)=>{
    if(err){
        console.log(err)
    }else{
        console.log("mail sent" + info.response)
    }
})


server.listen(PORT ,()=>{
    console.log("server initiated")
})