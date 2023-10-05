const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
dotenv.config();

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

const PORT = process.env.PORT || 5000;
app.listen({ PORT }, console.log("Server started on port ${PORT}"));
