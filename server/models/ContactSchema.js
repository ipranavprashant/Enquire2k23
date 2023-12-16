const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 3,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
  },
  mobilenumber: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    minlength: 3,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = new mongoose.model("Contact", ContactSchema);
