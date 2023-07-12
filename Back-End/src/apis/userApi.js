const express = require("express");
const userApi = express.Router();
const User = require("../models/User");
userApi.get("/user/:id", async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.send(data).status(200);
  } catch (err) {
    res.send(err.message).status(400);
  }
});
userApi.post("/user", async (req, res) => {
  try {
    await User.create(req.body);
    res.send(req.body).status(201);
  } catch (err) {
    res.send(err.message).status(400);
  }
});
userApi.delete("/user/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send(data).status(200);
  } catch (err) {
    res.send(err.message).status(400);
  }
});
module.exports = userApi;
