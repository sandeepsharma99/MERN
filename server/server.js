/* cretaing server using Http module */

// import http from "http"

// const PORT = 3000;
// const server = http.createServer((req,res)=>{
//     if(req.url == '/'){
//         res.end("server")
//     }else if(req.url == "/about"){
//          res.end("About Page")
//     }else if(req.url == "/conatct"){
//          res.end("Contact Page :)")
//     }
// });


// server.listen(PORT,()=>{
//     console.log("server is listening on port 3000")
// })



/* creating server using  express
1. Install express 
*/

// import express from "express";

// import fs from "fs"

// const PORT = 3000;
// const server = express();

// server.get("/",(req,res)=>{
//     res.end("Hi from serverr...")
// })

// server.get("/about",(req,res)=>{
// // i'll read file using fs module asyn operation...
//     fs.readFile("./about.html","utf-8",(err,data)=>{
//         if(err){
//             res.status(500).send("err in reading file")
//             return;
//         }
//         res.send(data)
//     });
// })

// server.get("/home",(req,res)=>{
// // i'll read file using fs module asyn operation...
//     fs.readFile("./.html","utf-8",(err,data)=>{
//         if(err){
//             res.status(500).send("err in reading file")
//             return;
//         }
//         res.send(data)
//     });
// })


// server.listen(PORT, ()=>{
//     console.log("server is listeniing on port 3000")
// })


import express from "express"
const PORT = 3000;

    
const app = express();

app.set("view engine","ejs")

app.get("/contact",(req,res)=>{
    res.render("contact",{title:"server-side rendering"})
})

app.listen(PORT,()=>{
    console.log('server is listening on port 3000')
})



// sbcxvbcxm dsbnvnzc
// hjsdgsvjadv
// sgdjhzvcmxnb