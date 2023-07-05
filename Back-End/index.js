const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test").then((data) => {
  console.log("Connected to MongoDB");
});
const messageApi = require("./src/apis/messageApi");
const roomApi = require("./src/apis/roomApi");
const userApi = require("./src/apis/userApi");
const app = express();
app.use(express.json());
app.use(messageApi);
app.use(roomApi);
app.use(userApi);
app.use();
app.listen("8500", () => {
  console.log("Running on port 8500!!");
});
