const express = require("express");
const path = require("path");
const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/kyle", function(req, res) {
  res.sendFile(path.join(__dirname, "public/kyle.html"));
});

app.get("/bianca", function(req, res) {
  res.sendFile(path.join(__dirname, "public/bianca.html"));
});

app.get("/jen", function(req, res) {
  res.sendFile(path.join(__dirname, "public/jen.html"));
});


app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");