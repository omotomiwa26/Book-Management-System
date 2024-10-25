require('dotenv').config();

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected Succesfully!'))
    .catch(err => console.error('MongoDB Connection Error:', err));
