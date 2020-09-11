const fetch = require('node-fetch');

async function fetchQuotes() {
  fetch('http://futuramaapi.herokuapp.com/')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(Error);
}

module.exports = fetchQuotes;
