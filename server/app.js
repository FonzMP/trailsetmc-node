const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
var cors = require("cors");
var bcrypt = require("bcryptjs");
const saltRounds = 10;

app.use(cors());

const User = require("./models/user");

const mLab = `mongodb://${process.env.DBUSER}:${
  process.env.DBPASSWORD
}@ds151863.mlab.com:51863/${process.env.DBNAME}`;

mongoose.connect(mLab, { useNewUrlParser: true });

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
  bcrypt.hash(req.body.user.password, saltRounds, function(err, hash) {
    const user = {
      name: req.body.user.name,
      email: req.body.user.email,
      telephone: req.body.user.telephone,
      username: req.body.user.username,
      password: hash
    };
    User.create(user, function(err, user) {
      if (err) {
        res.json({ error: err });
      } else {
        res.json(user);
      }
    });
  });
});

app.post("/login", function(req, res) {
  User.findOne({
    username: { $regex: new RegExp(req.body.user.username, "i") }
  }).then(function(user) {
    if (!user) {
      res.json({ error: "Sorry, we couldn't find a user with that username" });
    } else {
      bcrypt.compare(req.body.user.password, user.password, function(
        err,
        result
      ) {
        if (result == true) {
          res.json(user);
        } else {
          res.send({ error: "That password seems to be incorrect" });
        }
      });
    }
  });
});

app.get("/user/:id", function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (!user) {
      res.json({ error: "User not found" });
    } else {
      res.json(user);
    }
  });
});

app.listen(3001, () => {
  console.log("server has started");
  console.log(
    `${process.env.DBUSER}:${process.env.DBPASSWORD}@ds151863.mlab.com:51863/${
      process.env.DBNAME
    }`
  );
});
