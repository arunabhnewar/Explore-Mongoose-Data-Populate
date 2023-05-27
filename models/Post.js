// Dependencies
const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    likes: Number,
    shares: Number,
    profile: {
        type: Schema.Types.ObjectId,
        ref: "Profile",
    }

}, { timestamps: true })



const Post = model("Post", postSchema);


// Module Export
module.exports = Post;


