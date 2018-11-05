const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Contact = import("./contact");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: Number, required: true },
  password: { type: String, required: true },
  emergency: {
    type: Contact
  },
  contacts: [{ type: Contact }],
  dateJoined: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("User", userSchema);
