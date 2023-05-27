// Dependencies
const mongoose = require('mongoose');
const { Schema, model } = mongoose;


// Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }

}, { timestamps: true });


const User = model('User', userSchema);


// Module Export
module.exports = User;