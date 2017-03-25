var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    country: String,
    zipCode: Number,
    createdOn: Date,
    isActive: Boolean
});
