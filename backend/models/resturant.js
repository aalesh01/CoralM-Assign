const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    id: Number,
    name: String,
    address: String,
    city: String,
    state: String,
    zipcode: String,
    cuisine: String,
    rating: Number,
    description: String,
    reviews: [{
            rating: Number,
            review: String
        }]
})

const restaurantDB = mongoose.model('resturant', restaurantSchema);

module.exports = restaurantDB;