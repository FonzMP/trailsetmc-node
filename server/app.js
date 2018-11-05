const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
var cors = require("cors");

app.use(cors());

const User = require("./models/user");

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.post("/signup", function(req, res) {
  User.create(req.body.user, function(err, user) {
    if (err) {
      res.json({ error: err });
    } else {
      res.json(user);
    }
  });
});

app.listen(3001, () => {
  console.log("server has started");
});
