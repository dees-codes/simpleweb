// this file contains our server logic

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Good night for the day');
});

app.listen(8080, () => {
    console.log('listening on port 8080');
});