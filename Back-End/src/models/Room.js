const mongoose = require("mongoose");
const roomSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
    minLength: [5, "Room IDs should be more than 5 characters!!"],
    maxLength: [20, "Room IDs cannot be more than 20 characters!!"],
    immutable: true,
  },
  messages: {
    type: [String],
  },
  users: {
    type: [String],
  },
});
const Room = mongoose.model("rooms", roomSchema);
module.exports = Room;
