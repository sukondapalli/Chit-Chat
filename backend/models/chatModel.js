// contains all the fields whcih are required to be present for the chat functionality
const mongoose = require("monogoose");

const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    //every time new data is added, the timestamp is also saved
    timestamps: true,
  }
);

// creating an object to use later on
const Chat = mongoose.model("Chat", chatModel);

// used for exporting the object to other files within the scope of the project
module.exports = Chat;
