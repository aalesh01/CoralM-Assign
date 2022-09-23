const mongoose = require('mongoose');

const resturantSchema = mongoose.Schema({
    name: String,
    address: String,

})

const resturantDB = mongoose.model('resturant', resturantSchema);

module.exports = resturantDB;