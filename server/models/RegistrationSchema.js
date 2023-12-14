const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    college: {
        type: String,
        required: true,
    },
    phoneCode: {
        type: String
    },
    mobilenumber: {
        type: String,
        required: true
    },
    eventname: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = new mongoose.model("Registration", RegistrationSchema);
