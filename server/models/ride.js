const mongoose = require("mongoose");
const Schema = mongoose.Schema;

import Contact from "./contact";

const rideSchema = new Schema({
  name: String,
  date: Date,
  length: Number,
  contacts: [{ type: Contact }]
});

module.exports = mongoose.model("Ride", rideSchema);
