const resturantDB = require('../models/resturant');

createAllResturants = async () => {
    resturantDB.create({
        id: 1,
        name: 'Burger King',
        address: '1234 Main St',
        city: 'New York',
        state: 'NY',
        zipcode: '10001',
        cuisine: 'American',
        rating: 4.5,
        description: 'Burgers, fries, shakes, and more!',
        reviews: [
                    {
                        rating: 4.5,
                        review: 'Great food, great service, great price!'
                    }
                ]
            }
    )
        }

module.exports = createAllResturants;