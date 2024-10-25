const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1 style="color: Blue";>Welcome To My-API-Project!</h1>');
});

module.exports = app;