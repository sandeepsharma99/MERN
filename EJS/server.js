import express from 'express';
const PORT = 3000;

const app = express();

// 1. Set EJS as the view engine
app.set("view engine", "ejs");

app.get("/about", (req, res) => {
  res.render("about",{  title: "About Us" });
})
app.get("/home", (req, res) => {
  res.render("home",{ title: "Home" });
})

// 2. Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
