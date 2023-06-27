const Message = require("../models/Message");
const express = require("express");
const messageApi = express.Router();
messageApi.get("/message", async (req, res) => {
  try {
    res.send(await Message.find()).status(200);
  } catch (err) {
    res.send(err.message).status(400);
  }
});
messageApi.post("/message", async (req, res) => {
  try {
    await Message.create({ ...req.body, createdAt: Date.now() });
    res.send("Created Message Successfully").status(201);
  } catch (err) {
    res.send(err.message).status(400);
  }
});
messageApi.get("/message/:id", async (req, res) => {
  try {
    const data = await Message.findById(req.params.id);
    res.send(data).status(200);
  } catch (err) {
    res.send(err.message).status(400);
  }
});
messageApi.get("/message//:room", async (req, res) => {
  try {
    const data = await Message.find({ room: req.params.room });
    res.send(data).status(200);
  } catch (err) {
    res.send(err.message).status(400);
  }
});
module.exports = messageApi;
