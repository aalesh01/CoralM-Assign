const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

async function connectDatabase() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDatabase;