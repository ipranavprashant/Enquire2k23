const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  // name: {
  //   type: String,
  //   required: true,
  //   minlength: 3,
  // },
  text: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = new mongoose.model("Message", MessageSchema);
