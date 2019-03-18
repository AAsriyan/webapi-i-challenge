// implement your API here
const express = require("express");

const db = require("./data/db.js");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(4000, () => {
  console.log("\n** API up and running on port 4000 **");
});
