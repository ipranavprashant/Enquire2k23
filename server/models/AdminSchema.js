const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: [true, "The entered Email ID is already registered"]
    },
    password: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Admin", AdminSchema);
