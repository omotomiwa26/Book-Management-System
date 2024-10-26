const express = require('express');
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.json());
app.set('view engine', 'ejs');


// home route
app.get('/', (req, res) => {
    res.send('<h1 style="color: Blue";> WELCOME TO BOOK MANAGEMENT SYSTEM!</h1>');

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

});

module.exports = app;
