const { fetchBreedDescription } = require('./breederFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.error('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
