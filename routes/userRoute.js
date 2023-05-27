// Dependencies
const express = require('express');
const Post = require('../models/Post');
const Profile = require('../models/Profile');
const { update } = require('../models/User');
const User = require('../models/User');


const userRoute = express.Router()



// Add  new User
userRoute.post('/adduser', async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
})



// Profile Post
userRoute.post('/profile/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const profile = new Profile({
            title: req.body.title,
            address: req.body.address,
            phone: req.body.phone,
            hobbies: req.body.hobbies,
            posts: [],
            user: userId
        });
        const result = await profile.save();
        const update = await User.findOneAndUpdate({ _id: userId }, {
            $set: {
                profile: result._id
            }
        }, { new: true })
        res.send(update);
    } catch (error) {
        console.log(error);
    }
})



// User Post
userRoute.post('/addpost/:profileId', async (req, res) => {
    try {
        const profileId = req.params.profileId;

        const post = new Post({
            ...req?.body,
            profile: profileId
        });
        // return console.log(post)
        const result = await post.save();
        const update = await Profile.findOneAndUpdate({ _id: profileId }, {
            $push: {
                posts: result._id
            }
        }, { new: true })
        res.send(update);
    } catch (error) {
        console.log(error);
    }
})



// Query User
userRoute.get('/', async (req, res) => {
    // const result = await User.find({}, { name: true, profile: true });
    // const result = await User.find({}).populate('profile');

    const result = await User.find({}).populate({ path: 'profile' });
    for (let doc of result) {
        await Profile.populate(doc.profile, { path: "posts" })
    }
    res.send(result)
})




// Module Export
module.exports = userRoute;