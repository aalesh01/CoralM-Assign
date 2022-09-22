const mongoose = require('mongoose');
const MONOGO_URI = process.env.MONGO_URI;

async function connectDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.log(err);
  }
}