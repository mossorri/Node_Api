const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },

    email: {
        type: String,
        required: [true, "Enter an email address"]
    },

    phoneNumber: {
        type: String,
        required: [true, "Enter your phone number"]
    },

    country: {
        type: String,
        required: [true, "Enter country of birth"]
    },

    address: {
        type: String,
        required: [true, "Enter your house address"]
    },

    image: {
        type: String,
        required: [true, "Paste your image link here"]
    },
},
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;