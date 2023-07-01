const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [2, "Name should be two or more characters!!"],
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User;
