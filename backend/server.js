const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
dotenv.config();

// creating an express api so that we can get values from database
app.get("/", (req, res) => {
  res.send("API is running");
});

// get all the chats
app.get("/api/chat", (req, res) => {
  res.send(chats);
});

// api to get information of one particular chat using chat ID
app.get("/api/chat/:id", (req, res) => {
  current_id = req.params.id;
  const singleChat = chats.find((chat) => chat._id == current_id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5500;
app.listen(5500, console.log("Server started on port ${PORT}"));
