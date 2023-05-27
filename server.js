// Dependencies
const express = require('express');
const mongoose = require('mongoose');
// const User = require('./models/User');
const userRoute = require('./routes/userRoute');



// App Initialize
const app = express();



// Middleware
app.use(express.json());
require('dotenv').config()
app.use('/user', userRoute);




// Server listening
async function social() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_URI);
        console.log("Database fucked Successfully!!");
    } catch (error) {
        console.log(err);
    }
}



app.listen(process.env.PORT || 3000, () => {
    social();
    console.log("Server has been fucking on port" + ' ' + 3000);
})
