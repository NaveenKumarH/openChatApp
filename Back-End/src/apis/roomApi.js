const express = require("express");
const roomApi = express.Router();
const Room = require("../models/Room");
Room.get("/room", (req, res) => {
  res.send("Hola");
});
module.exports = roomApi;
