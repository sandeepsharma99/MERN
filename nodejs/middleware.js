import express from "express";

const PORT = 3000;

const app = express();

//authanticate

app.use((req,res,next)=>{
     let password = 1234567;
    if(req.body.password.length == 6){
        console.log("valid user")
    }else{

    }
})
next();

app.use((req,res,next)=>{
    if(req.body.username === username && req.body.password === password && role === role){ 
    }
    {
        console.log("middleware  1 called") 
        next()
    }
})

app.get("/",(req,res)=>{
    res.render("admin")
})

app.post("/login",(req,res)=>{
    res.send("Login page")
})

app.listen(PORT,(req,res)=>{
    console.log("server is listening on 3000")
})

