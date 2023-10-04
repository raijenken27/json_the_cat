const request = require('request');

const apiBaseURL = 'https://api.thecatapi.com/v1/breeds/search?q=';

const breedName = process.argv[2];

request(apiBaseURL + breedName, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed '${breedName}' not found.`);
    } else {
      console.log(data[0].description);
    }
  }
});
