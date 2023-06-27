const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    minLength: 1,
    required: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
});
const Message = mongoose.model("messages", messageSchema);
module.exports = Message;
