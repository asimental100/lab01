// const request = require('superagent');

async function getName(object) {
  const { name } = object;
  return name;
}

module.exports = getName;
