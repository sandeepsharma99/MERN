import fs from "fs";

/* Synchronous Method */
// write
fs.writeFileSync("sandeep.pdf","hello world");
fs.writeFileSync("sandeep.pdf","namaste");
//append
fs.appendFileSync("sandeep.pdf","\n hello world 2");
fs.appendFileSync("sandeep.pdf","\n phir se nameste")
//read
const res = fs.readFileSync("sandeep.pdf","utf-8")
console.log(res);
//unlink
fs.unlinkSync("sharma.pdf");

//read file
// const data = fs.readFileSync("sandeep.pdf","utf-8")
// console.log(data);

//Asyn operation
//write
fs.writeFile("sandeep.pdf","\n 2-sandeepp",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file is created")
    }
})
//read
fs.readFile("sandeep.pdf","utf-8",(err,data)=>{
    if(err){
        console.log(erroorrr)
    }else{
        console.log(data)
    }
})

fs.appendFileSync("sandeep.pdf","\n helloworld",(err)=>{
    if(err){
        console.log("errrrr")
    }else{
        console.log("filer created")
    }
})

// fs.writeFileSync("sharma.pdf","helloworld",(err)=>{
//     if(err){
//         console.log("errrrr")
//     }else{
//         console.log("filer created")
//     }
// })