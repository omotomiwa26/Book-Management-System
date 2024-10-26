const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

const app = express();
app.use(bodyParser.json());
app.set('view engine', 'ejs');


// home route
app.get('/', (req, res) => {
    res.send('<h1 style="color: Blue";> WELCOME TO BOOK MANAGEMENT SYSTEM!</h1>');


app.use('/api', authRoutes);
app.use('/api', profileRoutes);
});

module.exports = app;
