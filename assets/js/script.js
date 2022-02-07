var userInputEl = document.getElementById("user-input");
const searchButtonEl = document.getElementById("search-button");

const searchedCityButton1El = document.getElementById("city1-btn");
const searchedCityButton2El = document.getElementById("city2-btn");
const searchedCityButton3El = document.getElementById("city3-btn");
const searchedCityButton4El = document.getElementById("city4-btn");
const searchedCityButton5El = document.getElementById("city5-btn");
const searchedCityButton6El = document.getElementById("city6-btn");
const searchedCityButton7El = document.getElementById("city7-btn");
const searchedCityButton8El = document.getElementById("city8-btn");

const searchedCityText1El = document.getElementById("city1-txt");
const searchedCityText2El = document.getElementById("city2-txt");
const searchedCityText3El = document.getElementById("city3-txt");
const searchedCityText4El = document.getElementById("city4-txt");
const searchedCityText5El = document.getElementById("city5-txt");
const searchedCityText6El = document.getElementById("city6-txt");
const searchedCityText7El = document.getElementById("city7-txt");
const searchedCityText8El = document.getElementById("city8-txt");

const currentCityEl = document.getElementById("current-city")
const currentDateEl = document.getElementById("date");
const currentEmoji = document.getElementById("current-emoji");
const currentTempEl = document.getElementById("current-temp");
const currentWindEl = document.getElementById("current-wind");
const currentHumidityEl = document.getElementById("current-humidity");
const currentUvEl = document.getElementById("current-uv");

const day1CardEl = document.getElementById("day-1-card");
const day2CardEl = document.getElementById("day-2-card");
const day3CardEl = document.getElementById("day-3-card");
const day4CardEl = document.getElementById("day-4-card");
const day5CardEl = document.getElementById("day-5-card");

const day1ImgEl = document.getElementById("day-1-img");
const day2ImgEl = document.getElementById("day-2-img");
const day3ImgEl = document.getElementById("day-3-img");
const day4ImgEl = document.getElementById("day-4-img");
const day5ImgEl = document.getElementById("day-5-img");

const day1DayEl = document.getElementById("day-1-day");
const day2DayEl = document.getElementById("day-2-day");
const day3DayEl = document.getElementById("day-3-day");
const day4DayEl = document.getElementById("day-4-day");
const day5DayEl = document.getElementById("day-5-day");

const day1DateEl = document.getElementById("day-1-date");
const day2DateEl = document.getElementById("day-2-date");
const day3DateEl = document.getElementById("day-3-date");
const day4DateEl = document.getElementById("day-4-date");
const day5DateEl = document.getElementById("day-5-date");

const day1TextEl = document.getElementById("day-1-text");
const day2TextEl = document.getElementById("day-2-text");
const day3TextEl = document.getElementById("day-3-text");
const day4TextEl = document.getElementById("day-4-text");
const day5TextEl = document.getElementById("day-5-text");

const day1TempEl = document.getElementById("day-1-temp");
const day2TempEl = document.getElementById("day-2-temp");
const day3TempEl = document.getElementById("day-3-temp");
const day4TempEl = document.getElementById("day-4-temp");
const day5TempEl = document.getElementById("day-5-temp");

const day1WindEl = document.getElementById("day-1-wind");
const day2WindEl = document.getElementById("day-2-wind");
const day3WindEl = document.getElementById("day-3-wind");
const day4WindEl = document.getElementById("day-4-wind");
const day5WindEl = document.getElementById("day-5-wind");

const imgMostlyCloudy = "./assets/images/mostlycloudy.jpg";
const imgMostlySunny = "./assets/images/mostlysunny.jpg";
const imgRain = "./assets/images/rain.jpg";
const imgSnow = "./assets/images/snow.jpg";
const imgSunny = "./assets/images/sunny.jpg";
const imgThunderstorm = "./assets/images/thunderstorm.jpg";
const imgOther = "./assets/images/tornado.jpg";

const emojiMostlyCloudy = "fas fa-cloud-sun";
const emojiMostlySunny = "fas fa-cloud-sun";
const emojiRain = "fas fa-cloud-rain";
const emojiSnow = "fas fa-snowflake";
const emojiSunny = "fas fa-sun";
const emojiThunderstorm = "fas fa-bolt";
const emojiOther = "fas fa-cloud-meatball";

const apiKey = "52828bd95a263fd4260316440728f92b";
var userInput;
var city = "";
var state = "";
var countryCode = "us";
var cityState = city + "," + state + "," + countryCode;
var zipCode;

var urlFromZIP;
var urlFromCityState = "http://api.openweathermap.org/data/2.5/weather?q=" + cityState + "&appid=" + apiKey;
var currentURL;
var forecastURL;

var dataFromCityState;
var dataFromZIP;
var latitude;
var longitude;

var currentData;
var cityName;
var currentMain;
var currentTemp;
var currentWind;
var currentHumidity;
var currentUVindex;

var forecastData;

function printCurrentDataToDisplay () {
  // currentCityEl = cityName;
  // currentDateEl = 
  currentTempEl.textContent = currentTemp;
  currentWindEl.textContent = currentWind;
  currentHumidityEl.textContent = currentHumidity;
  currentUvEl.textContent = currentUVindex;
}

function distributeCurrentData (w) {
  cityName = forecastData.city.name;
  currentMain = w.current.weather[0].description;
  currentTemp = w.current.temp;
  currentWind = w.current.wind_speed;
  currentHumidity = w.current.humidity;
  currentUVindex = w.current.uvi;
  printCurrentDataToDisplay ();
};

function distributeForecastData (f) {
  console.log("works so far!");
}

function pullAllWeatherData () {
  fetch(currentURL)
  .then(function (response1) {
    return response1.json();
  })
  .then(function (data1) {
    currentData = data1;
    console.log("Today's Data:")
    console.log(currentData);
    distributeCurrentData(currentData);
  });

  fetch(forecastURL)
  .then(function (response2) {
    return response2.json();
  })
  .then(function (data2) {
    forecastData = data2;
    console.log("Forecast Data:");
    console.log(forecastData);
    distributeForecastData(forecastData);
  })
};

function makeLatLonFromZIP (dataFromZIP) {
  latitude = dataFromZIP.coord.lat;
  longitude = dataFromZIP.coord.lon;
  forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  currentURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=imperial`;
  pullAllWeatherData ();
};

function makeLatLonFromCityState (dataFromCityState) {
  latitude = dataFromCityState.coord.lat;
  longitude = dataFromCityState.coord.lon;
  currentURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=imperial`;
  forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  pullAllWeatherData ();
};

function getDataFromZIP (zipCode) {
  urlFromZIP = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "," + countryCode + "&appid=" + apiKey;
  fetch(urlFromZIP)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      dataFromZIP = data;
      console.log(dataFromZIP);
      makeLatLonFromZIP(dataFromZIP);
    });
    // return dataFromZIP;
  };
  
function getDataFromCityState (cityState) {
  urlFromCityState = "http://api.openweathermap.org/data/2.5/weather?q=" + cityState + "&appid=" + apiKey;
  fetch(urlFromCityState)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    dataFromCityState = data;
    console.log(dataFromCityState);
    makeLatLonFromCityState(dataFromCityState);
  });
  // return dataFromCityState;
};

function convertUserInput () {
  var cityStateArr
  userInput = userInputEl.value;
  cityStateArr = userInput.split(",");
  city = cityStateArr[0];
  state = cityStateArr[1].replace(/ /g, '');
  cityState = city + "," + state + "," + countryCode;
  return cityState;
};

function runWithZIP (zipCode) {
  getDataFromZIP(zipCode);
};

function runWithCityState () {
  convertUserInput();
  getDataFromCityState(cityState);
};

function storeUserInput () {
  userInput = userInputEl.value;
  if (!isNaN(userInput)) {
    zipCode = userInput.toString(5);
    console.log("The ZIP Code is: " + zipCode + ".");
    // THIS IS WHERE LOCAL STORAGE ZIP CODE WILL GO
    runWithZIP(zipCode);
  } else {
  console.log("The city name is: " + userInput + ".");
  // THIS IS WHERE LOCAL STORAGE CITY NAME WILL GO
  runWithCityState();
  }
};

function runApp () {
  storeUserInput();
};

searchButtonEl.onclick = function() {
  console.log("clicked SEARCH")
  console.log("input is " + userInputEl.value);
  runApp();
};