var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// child address schema
var addressSchema = new Schema({
    type: String,
    street: String,
    city: String,
    state: String,
    country: String,
    postalCode: Number
});

// parent customer schema
var customerSchema = new Schema({
    name: {
        firstName: String,
        lastName: String
    },
    address: [ addressSchema ],
    createdOn: {
        type: Date,
        default: Date.now()
    },
    isActive: {
        type: Boolean,
        default: true
    }
});
