const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test").then((data) => {
  console.log("Connected to MongoDB");
});
const messageApi = require("./src/apis/messageApi");
const app = express();
app.use(express.json());
app.use(messageApi);
app.listen("8500", () => {
  console.log("Running in port 8500!!");
});
