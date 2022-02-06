// GEO-location by city and state name
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// Search by ZIP code
// http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}

const apiKey = "52828bd95a263fd4260316440728f92b"
const atlantaTest = "http://api.openweathermap.org/geo/1.0/direct?q=Atlanta,GA,USA&appid=52828bd95a263fd4260316440728f92b"

var weatherData

fetch(atlantaTest)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    weatherData = data;
    console.log(data);
  });
