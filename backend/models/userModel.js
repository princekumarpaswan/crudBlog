const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"],
        trim: true,
        maxlenght: [25, "Name must be 25 Ch Long"]
    },
    email: {
        type: String,
        index: true,
        required: [true, "Email is Required"],
        // unique: true
    }
});

module.exports = mongoose.model("User", userSchema)