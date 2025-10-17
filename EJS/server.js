import express from 'express';
const PORT = 3000;

const app = express();

app.get("/about", (req, res) => {
  res.render("about",{  title: "About Us" });
})
app.get("/home", (req, res) => {
  res.render("home",{ title: "Home" });
})

