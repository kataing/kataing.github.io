const express = require('express');
const path = require('path');
const parser = require('body-parser');


const app = express();
const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.listen(port, () => console.log(`You are now listening on port ${port}.`));

module.exports = app;