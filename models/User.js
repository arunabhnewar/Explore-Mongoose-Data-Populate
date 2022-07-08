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
        unique: true,
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }

}, { timestamps: true });



// Instance Method
userSchema.methods = {
    getAll: function (n) {
        return model('User').find({}).limit(n)
    }
}



// Statics Method
userSchema.statics = {
    getAll: function (n) {
        return model('User').find({}).limit(n)
    }
}



// Query Helpers
userSchema.query = {
    searchByName: function (namStr) {
        return this.$where({ name: new RegExp(namStr, 'ig') })
    }
}




const User = model('User', userSchema);


// Module Export
module.exports = User;