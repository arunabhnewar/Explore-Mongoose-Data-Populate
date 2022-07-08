// Dependencies
const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const profileSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    address: String,
    phone: Number,
    hobbies: [String],
    posts: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true })


const Profile = model('Profile', profileSchema)


// Module Export
module.exports = Profile;