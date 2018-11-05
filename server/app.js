const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const mLab = `mongodb://${process.env.DBUSER}:${
  process.env.DBPASSWORD
}@ds151863.mlab.com:51863/trailsetmcnode`;

mongoose.connect(
  mLab,
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected to server");
});

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(3001, () => {
  console.log("server has started");
});
