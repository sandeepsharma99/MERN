import express from "express"
const PORT = 3000;

const app = express();

app.get("/",(req,res)=>{
    res.send("hello world")
});
console.log(nodemailer)
//Transport setup
const Transport = nodemailer.createTransport({
    service:"gamil",
    auth:{
        user:"sandeepsharma9182@gmail.com",
        pass:"password"
    }
})
const mailOption = {
    from : "sandeeepsharma9182@gmail.com",
    to:"lakshaya20042004gmial.com",
    subject: "test mail",
    text:"This is text mail sent from Node.js"
}
transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error)
    }else{
        console.log("email sent: "+ info.response)
    }
})


app.listen(PORT,()=>{
    console.log('server is listening on port 3000')
})