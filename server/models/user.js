const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  telephone: { type: Number, required: true },
  password: { type: String, required: true },
  emergency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contact"
  },
  contacts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contact"
    }
  ],
  dateJoined: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("User", userSchema);
