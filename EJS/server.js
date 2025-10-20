import express from 'express';
import path from 'path'; // 1. Import the path module
const PORT = 3000;

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// 2. Set the directory for the view files
const __dirname = path.resolve();
app.set("views", path.join(__dirname, "view"));

app.get("/about", (req, res) => {
  res.render("about",{  title: "About Us" });
})
app.get("/home", (req, res) => {
  res.render("home",{ title: "Home" });
})

// 3. Start the server (with corrected syntax)
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
