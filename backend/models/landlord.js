const mongoose = require('mongoose');
// We export the base schema
const User = require('./user')
const Schema = mongoose.Schema;

//Define the landlord schema
const landlordSchema = new Schema({
    socialMediaHandles: {
        type: Map,
        of: String
    },
    businessHours: String,
});

// We inherit the fields from the base schema (User)
const landlordModel = User.discriminator('Landlord', landlordSchema, {
    discriminatorKey: 'type'
});

module.exports = landlordModel;

//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose