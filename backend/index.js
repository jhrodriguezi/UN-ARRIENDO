const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const session = require('express-session');
const mongoose = require('mongoose');
const morgan = require('morgan');

require('dotenv').config();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configure the morgan library to view requests.
app.use(morgan('tiny'));

//Initialize the session
app.use(session({
  secret: process.env.SECRET, 
  saveUninitialized: false, 
  resave: false
}));

//Set up default mongoose connection, uses URI on .env file
mongoose.connect(process.env.CONNECTION_URI, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Configure the routes of the project
app.use('/user', require('./routes/userRoutes'));

//app.use(express.static('public'));


app.listen(process.env.PORT, function() {
  console.log(`Example app listening on port ${process.env.PORT}!`)
});