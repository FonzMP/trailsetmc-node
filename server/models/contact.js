const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: String,
  phone: Number,
  email: String
});

module.exports = mongoose.model("Contact", contactSchema);
