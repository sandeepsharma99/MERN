import http from "http";

const PORT  = 3000;

const server = http.createServer((req,res)=>{
    res.end("hello from server")
})

server.listen(PORT,()=>{
    console.log(`our server is running on localhost 3000 :)`)
})