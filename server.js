// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const userRoute = require('./routes/userRoute');



// App Initialize
const app = express();



// Middleware
app.use(express.json());
require('dotenv').config()
app.use('/user', userRoute);




// Instance Method
// app.get('/', async (req, res) => {
//     const user = new User();
//     const result = await user.getAll(2);
//     res.send(result);
// })



// Statics Method
app.get('/statics', async (req, res) => {
    const result = await User.find().searchByName('j')
    res.send(result);
})



// Query Helpers
app.get('/query', async (req, res) => {
    const result = await User.getAll(3)
    res.send(result);
})



// Server listening
async function social() {
    try {
        await mongoose.connect(process.env.URI);
        console.log("Database fucked Successfully!!");
    } catch (error) {
        console.log(err);
    }
}


app.listen(process.env.PORT || 3000, () => {
    social();
    console.log("Server has been fucking on port" + ' ' + 3000);
})



// mongoose.connect("mongodb://127.0.0.1/social", {
//     useNewUrlParser: true,
// })
//     .then(() => {
//         app.listen(3000, () => console.log("Server has been running on port" + " " + 3000))
//     })
//     .catch(err => console.log(err))

