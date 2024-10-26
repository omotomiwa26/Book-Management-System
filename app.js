const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const bookRoutes = require('./routes/book');

const app = express();
app.use(bodyParser.json());
app.set('view engine', 'ejs');


// home route
app.get('/', (req, res) => {
    res.send('<h1 style="color: Blue";> WELCOME TO BOOK MANAGEMENT SYSTEM!</h1>');

// Use All Routes
app.use('/api', authRoutes);
app.use('/api', profileRoutes);
app.use('/api', bookRoutes);
});

module.exports = app;
