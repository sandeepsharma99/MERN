import express from 'express';


const server = express();
const PORT =  3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
}