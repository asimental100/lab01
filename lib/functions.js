// const request = require('superagent');

async function getName(object) {
  const name = object['name'];
  return name;
}

module.exports = getName;
