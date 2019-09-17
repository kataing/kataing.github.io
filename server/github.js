const request = require('request');
const { TOKEN } = require('../config.js');
const { username } = require('../config.js');

let getReposByUsername = (cb) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${TOKEN}`
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