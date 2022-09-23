const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;
const connectDatabase = require('./dbConnect');
const resturantDB = require('./models/resturant');

resturantDB.create({
    name: 'McDonalds',
    address: '1234 Main St',
})
resturantDB.create({
    name: 'Burger King',
    address: '1234 Main St',
})
resturantDB.create({
    name: 'Wendys',
    address: '1234 Main St',
})
resturantDB.create({
    name: 'Matt',
    address: '1234 Main St',
})

app.get('/', async (req, res) => {
        const docs = await resturantDB.find();
        res.send(docs);
})






connectDatabase();

app.listen(PORT, () => console.log(`Resturant app listening on port ${PORT}!`));