const request = require('request');
const { TOKEN } = require('../config.js');
const { username } = require('../config.js');

let KEY = process.env.KEY;
if (KEY == null || KEY == "") {
  KEY = TOKEN;
}

let login = process.env.login;
if (login == null || login == "") {
  login = username;
}

let getReposByUsername = (cb) => {
  let options = {
    url: `https://api.github.com/users/${login}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${KEY}`
    }
  };

  request(options, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
}

module.exports.getReposByUsername = getReposByUsername;