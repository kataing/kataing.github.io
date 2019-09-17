const express = require('express');
const path = require('path');
const parser = require('body-parser');
const github = require('./github.js');

const app = express();
const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('/repos', (req, res) => {
  github.getReposByUsername((err, { body }) => {
    if (err) {
      res.status(404).send('Unable to complete requests');
    } else {
      const repos = JSON.parse(body);
      repos.sort((a, b) => {
        return b.size - a.size;
      })
      res.status(200).send(repos);
    }
  })
});


app.listen(port, () => console.log(`You are now listening on port ${port}.`));

module.exports = app;