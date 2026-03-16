const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/Circle", (req, res) => {
  res.sendFile(__dirname + "/Circle.html");
});
app.get("/Triangle", (req, res) => {
  res.sendFile(__dirname + "/Triangle.html");
});
app.post("/Triangle", (req, res) => {
  const base = req.body.base;
  const height = req.body.height;
  const area = 0.5 * base * height;
  res.send(`<h1>Triangle Area: ${area}</h1>`);
});
app.post("/Circle", (req, res) => {
  const radius = req.body.radius;
  const area = Math.PI * radius * radius;
  res.send(`<h1>Circle Area: ${area}</h1>`);
});
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
