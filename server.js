const express = require("express");
const app = express();
const cort = require("cors");
const mongoose = require("mongoose");

app.use(cort());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://chidanandaSahu:papunAt4999@cluster0.tqvco.mongodb.net/booksDB"
);

app.use("/", require("./routes/bookRoute"));

app.listen(3001, function () {
  console.log("express server is running on port 3001");
});
