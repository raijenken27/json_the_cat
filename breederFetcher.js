const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const apiBaseURL = 'https://api.thecatapi.com/v1/breeds/search?q=';

  request(apiBaseURL + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(`Breed '${breedName}' not found.`, null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
