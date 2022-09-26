const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();
const createAllRestaurants = require('./tasks/createRest');

const PORT = process.env.PORT;
const connectDatabase = require('./dbConnect');
const restaurantDB = require('./models/resturant');

createAllRestaurants();

app.get('/delete', (req, res) => {
        restaurantDB.collection.drop();
        res.send('Deleted all resturants');
})

app.get('/', async (req, res) => {
        const docs = await restaurantDB.find();
        res.send(docs);
})

app.post('/review/:id', async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
        const id = req.params.id;
        const rating= req.body.rating
        const review = req.body.review
        const reviewObj = {rating,review}
        console.log(review)
        await restaurantDB.updateOne({id: id}, {$push: {reviews: reviewObj}})
        res.send('Review added');
})

app.get('/admin', async (req, res) => {
        const docs = await restaurantDB.find();
        res.send(docs);
})


connectDatabase();

app.listen(PORT, () => console.log(`Restaurant app listening on port ${PORT}!`))