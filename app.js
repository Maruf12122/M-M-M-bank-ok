const express = require("express");
const app = express();
const path = require("path");



app.set("view engine", "ejs");
app.get(express.json());
app.get(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));



app.get("/", (req, res) => {
  res.render("fast");
});
app.get("/login",(req,res)=>{
  res.render("index")
})

app.listen(3000);
