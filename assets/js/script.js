// LONG LIST, LINKING HTML ELEMENTS TO JS
var userInputEl = document.getElementById("user-input");
var searchButtonEl = document.getElementById("search-button");

var searchedCityButton1El = document.getElementById("city1-btn");
var searchedCityButton2El = document.getElementById("city2-btn");
var searchedCityButton3El = document.getElementById("city3-btn");
var searchedCityButton4El = document.getElementById("city4-btn");
var searchedCityButton5El = document.getElementById("city5-btn");
var searchedCityButton6El = document.getElementById("city6-btn");
var searchedCityButton7El = document.getElementById("city7-btn");
var searchedCityButton8El = document.getElementById("city8-btn");

var searchedCityText1El = document.getElementById("city1-txt");
var searchedCityText2El = document.getElementById("city2-txt");
var searchedCityText3El = document.getElementById("city3-txt");
var searchedCityText4El = document.getElementById("city4-txt");
var searchedCityText5El = document.getElementById("city5-txt");
var searchedCityText6El = document.getElementById("city6-txt");
var searchedCityText7El = document.getElementById("city7-txt");
var searchedCityText8El = document.getElementById("city8-txt");

var currentCityEl = document.getElementById("current-city")
var currentDateEl = document.getElementById("date");
var currentEmoji = document.getElementById("current-emoji");
var currentTempEl = document.getElementById("current-temp");
var currentWindEl = document.getElementById("current-wind");
var currentHumidityEl = document.getElementById("current-humidity");
var currentUvEl = document.getElementById("current-uv");

var day1CardEl = document.getElementById("d1-card");
var day2CardEl = document.getElementById("d2-card");
var day3CardEl = document.getElementById("d3-card");
var day4CardEl = document.getElementById("d4-card");
var day5CardEl = document.getElementById("d5-card");

var day1ImgEl = document.getElementById("day-1-img");
var day2ImgEl = document.getElementById("day-2-img");
var day3ImgEl = document.getElementById("day-3-img");
var day4ImgEl = document.getElementById("day-4-img");
var day5ImgEl = document.getElementById("day-5-img");

var day1DayEl = document.getElementById("d1-day");
var day2DayEl = document.getElementById("d2-day");
var day3DayEl = document.getElementById("d3-day");
var day4DayEl = document.getElementById("d4-day");
var day5DayEl = document.getElementById("d5-day");

var day1DateEl = document.getElementById("d1-date");
var day2DateEl = document.getElementById("d2-date");
var day3DateEl = document.getElementById("d3-date");
var day4DateEl = document.getElementById("d4-date");
var day5DateEl = document.getElementById("d5-date");

var day1TextEl = document.getElementById("d1-text");
var day2TextEl = document.getElementById("d2-text");
var day3TextEl = document.getElementById("d3-text");
var day4TextEl = document.getElementById("d4-text");
var day5TextEl = document.getElementById("d5-text");

var day1TempEl = document.getElementById("d1-temp");
var day2TempEl = document.getElementById("d2-temp");
var day3TempEl = document.getElementById("d3-temp");
var day4TempEl = document.getElementById("d4-temp");
var day5TempEl = document.getElementById("d5-temp");

var day1WindEl = document.getElementById("d1-wind");
var day2WindEl = document.getElementById("d2-wind");
var day3WindEl = document.getElementById("d3-wind");
var day4WindEl = document.getElementById("d4-wind");
var day5WindEl = document.getElementById("d5-wind");

var day1HumidityEl = document.getElementById("d1-hum");
var day2HumidityEl = document.getElementById("d2-hum");
var day3HumidityEl = document.getElementById("d3-hum");
var day4HumidityEl = document.getElementById("d4-hum");
var day5HumidityEl = document.getElementById("d5-hum");

var day1Desc = '';
var day2Desc = '';
var day3Desc = '';
var day4Desc = '';
var day5Desc = '';

// UN-USED EMOJIS, (decided against them, did card images instead)
/* var emojiMostlyCloudy = "fas fa-cloud-sun";
var emojiMostlySunny = "fas fa-cloud-sun";
var emojiRain = "fas fa-cloud-rain";
var emojiSnow = "fas fa-snowflake";
var emojiSunny = "fas fa-sun";
var emojiThunderstorm = "fas fa-bolt";
var emojiOther = "fas fa-cloud-meatball"; */


// EMPTY OR PREPARED CONSTANTS/VARIABLES FOR LATER
const apiKey = "52828bd95a263fd4260316440728f92b";
var userInput = '';
var city;
var state;
var countryCode = "us";
var cityState = city + "," + state + "," + countryCode;
var zipCode;

var urlFromZIP;
var urlFromCityState = "https://api.openweathermap.org/data/2.5/weather?q=" + cityState + "&appid=" + apiKey;
var currentURL;
var forecastURL;

var dataFromCityState;
var dataFromZIP;
var latitude;
var longitude;

var cityStateArr = [];
var currentData;
var cityName;
var currentDate = moment().format('llll');
var currentMain;
var currentTemp;
var currentWind;
var currentHumidity;
var currentUVindex;

var forecastData;

var forecastedHighTemps = [];

var forecastDay1Date = new Date()
var forecastDay2Date = new Date()
var forecastDay3Date = new Date()
var forecastDay4Date = new Date()
var forecastDay5Date = new Date()

var day1Temps = [];
var day2Temps = [];
var day3Temps = [];
var day4Temps = [];
var day5Temps = [];
var day1HighTemp;
var day2HighTemp;
var day3HighTemp;
var day4HighTemp;
var day5HighTemp;

function displayForecastedHighs() {
  day1TempEl.textContent = "Temp: " + day1HighTemp + "℉";
  day2TempEl.textContent = "Temp: " + day2HighTemp + "℉";
  day3TempEl.textContent = "Temp: " + day3HighTemp + "℉";
  day4TempEl.textContent = "Temp: " + day4HighTemp + "℉";
  day5TempEl.textContent = "Temp: " + day5HighTemp + "℉";
  
  day1WindEl.textContent = "Wind: " + day1HighWind + "mph";
  day2WindEl.textContent = "Wind: " + day2HighWind + "mph";
  day3WindEl.textContent = "Wind: " + day3HighWind + "mph";
  day4WindEl.textContent = "Wind: " + day4HighWind + "mph";
  day5WindEl.textContent = "Wind: " + day5HighWind + "mph";
  
  day1HumidityEl.textContent = "Humidity: " + day1HighHum + "%rh";
  day2HumidityEl.textContent = "Humidity: " + day2HighHum + "%rh";
  day3HumidityEl.textContent = "Humidity: " + day3HighHum + "%rh";
  day4HumidityEl.textContent = "Humidity: " + day4HighHum + "%rh";
  day5HumidityEl.textContent = "Humidity: " + day5HighHum + "%rh";
}

function getForecastedHighs() {
  // DAYS AND DATES
  day1DayEl.textContent = (moment().add(1, 'days').format("dddd"));
  day2DayEl.textContent = (moment().add(2, 'days').format("dddd"));
  day3DayEl.textContent = (moment().add(3, 'days').format("dddd"));
  day4DayEl.textContent = (moment().add(4, 'days').format("dddd"));
  day5DayEl.textContent = (moment().add(5, 'days').format("dddd"));
  day1DateEl.textContent = (moment().add(1, 'days').format("MMM Do YY"));
  day2DateEl.textContent = (moment().add(2, 'days').format("MMM Do YY"));
  day3DateEl.textContent = (moment().add(3, 'days').format("MMM Do YY"));
  day4DateEl.textContent = (moment().add(4, 'days').format("MMM Do YY"));
  day5DateEl.textContent = (moment().add(5, 'days').format("MMM Do YY"));
  
  // TEMPS ... hi-temp calculation
  day1Temps = [
    forecastData.list[0].main.temp,
    forecastData.list[1].main.temp,
    forecastData.list[2].main.temp,
    forecastData.list[3].main.temp,
    forecastData.list[4].main.temp,
    forecastData.list[5].main.temp,
    forecastData.list[6].main.temp,
    forecastData.list[7].main.temp
  ];
  day1HighTemp = Math.max.apply(null, day1Temps);
  
  day2Temps = [
    forecastData.list[8].main.temp,
    forecastData.list[9].main.temp,
    forecastData.list[10].main.temp,
    forecastData.list[11].main.temp,
    forecastData.list[12].main.temp,
    forecastData.list[13].main.temp,
    forecastData.list[14].main.temp,
    forecastData.list[15].main.temp
  ];
  day2HighTemp = Math.max.apply(null, day2Temps);
  
  day3Temps = [
    forecastData.list[16].main.temp,
    forecastData.list[17].main.temp,
    forecastData.list[18].main.temp,
    forecastData.list[19].main.temp,
    forecastData.list[20].main.temp,
    forecastData.list[21].main.temp,
    forecastData.list[22].main.temp,
    forecastData.list[23].main.temp
  ];
  day3HighTemp = Math.max.apply(null, day3Temps);
  
  day4Temps = [
    forecastData.list[24].main.temp,
    forecastData.list[25].main.temp,
    forecastData.list[26].main.temp,
    forecastData.list[27].main.temp,
    forecastData.list[28].main.temp,
    forecastData.list[29].main.temp,
    forecastData.list[30].main.temp,
    forecastData.list[31].main.temp
  ];
  day4HighTemp = Math.max.apply(null, day4Temps);
  
  day5Temps = [
    forecastData.list[32].main.temp,
    forecastData.list[33].main.temp,
    forecastData.list[34].main.temp,
    forecastData.list[35].main.temp,
    forecastData.list[36].main.temp,
    forecastData.list[37].main.temp,
    forecastData.list[38].main.temp,
    forecastData.list[39].main.temp
  ];
  day5HighTemp = Math.max.apply(null, day5Temps);
  
  // WINDS ... hi-winds calculation
  day1Winds = [
    forecastData.list[0].wind.speed,
    forecastData.list[1].wind.speed,
    forecastData.list[2].wind.speed,
    forecastData.list[3].wind.speed,
    forecastData.list[4].wind.speed,
    forecastData.list[5].wind.speed,
    forecastData.list[6].wind.speed,
    forecastData.list[7].wind.speed
  ];
  day1HighWind = Math.max.apply(null, day1Winds);
  
  day2Winds = [
    forecastData.list[8].wind.speed,
    forecastData.list[9].wind.speed,
    forecastData.list[10].wind.speed,
    forecastData.list[11].wind.speed,
    forecastData.list[12].wind.speed,
    forecastData.list[13].wind.speed,
    forecastData.list[14].wind.speed,
    forecastData.list[15].wind.speed
  ];
  day2HighWind = Math.max.apply(null, day2Winds);
  
  day3Winds = [
    forecastData.list[16].wind.speed,
    forecastData.list[17].wind.speed,
    forecastData.list[18].wind.speed,
    forecastData.list[19].wind.speed,
    forecastData.list[20].wind.speed,
    forecastData.list[21].wind.speed,
    forecastData.list[22].wind.speed,
    forecastData.list[23].wind.speed
  ];
  day3HighWind = Math.max.apply(null, day3Winds);
  
  day4Winds = [
    forecastData.list[24].wind.speed,
    forecastData.list[25].wind.speed,
    forecastData.list[26].wind.speed,
    forecastData.list[27].wind.speed,
    forecastData.list[28].wind.speed,
    forecastData.list[29].wind.speed,
    forecastData.list[30].wind.speed,
    forecastData.list[31].wind.speed
  ];
  day4HighWind = Math.max.apply(null, day4Winds);
  
  day5Winds = [
    forecastData.list[32].wind.speed,
    forecastData.list[33].wind.speed,
    forecastData.list[34].wind.speed,
    forecastData.list[35].wind.speed,
    forecastData.list[36].wind.speed,
    forecastData.list[37].wind.speed,
    forecastData.list[38].wind.speed,
    forecastData.list[39].wind.speed
  ];
  day5HighWind = Math.max.apply(null, day5Winds);
  
  // HUMIDITIES ... hi-humidity calculation
  day1Hums = [
    forecastData.list[0].main.humidity,
    forecastData.list[1].main.humidity,
    forecastData.list[2].main.humidity,
    forecastData.list[3].main.humidity,
    forecastData.list[4].main.humidity,
    forecastData.list[5].main.humidity,
    forecastData.list[6].main.humidity,
    forecastData.list[7].main.humidity
  ];
  day1HighHum = Math.max.apply(null, day1Hums);
  
  day2Hums = [
    forecastData.list[8].main.humidity,
    forecastData.list[9].main.humidity,
    forecastData.list[10].main.humidity,
    forecastData.list[11].main.humidity,
    forecastData.list[12].main.humidity,
    forecastData.list[13].main.humidity,
    forecastData.list[14].main.humidity,
    forecastData.list[15].main.humidity
  ];
  day2HighHum = Math.max.apply(null, day2Hums);
  
  day3Hums = [
    forecastData.list[16].main.humidity,
    forecastData.list[17].main.humidity,
    forecastData.list[18].main.humidity,
    forecastData.list[19].main.humidity,
    forecastData.list[20].main.humidity,
    forecastData.list[21].main.humidity,
    forecastData.list[22].main.humidity,
    forecastData.list[23].main.humidity
  ];
  day3HighHum = Math.max.apply(null, day3Hums);
  
  day4Hums = [
    forecastData.list[24].main.humidity,
    forecastData.list[25].main.humidity,
    forecastData.list[26].main.humidity,
    forecastData.list[27].main.humidity,
    forecastData.list[28].main.humidity,
    forecastData.list[29].main.humidity,
    forecastData.list[30].main.humidity,
    forecastData.list[31].main.humidity
  ];
  day4HighHum = Math.max.apply(null, day4Hums);
  
  day5Hums = [
    forecastData.list[32].main.humidity,
    forecastData.list[33].main.humidity,
    forecastData.list[34].main.humidity,
    forecastData.list[35].main.humidity,
    forecastData.list[36].main.humidity,
    forecastData.list[37].main.humidity,
    forecastData.list[38].main.humidity,
    forecastData.list[39].main.humidity
  ];
  day5HighHum = Math.max.apply(null, day5Hums);

  day1Desc = forecastData.list[0].weather[0].description
  day2Desc = forecastData.list[1].weather[0].description
  day3Desc = forecastData.list[2].weather[0].description
  day4Desc = forecastData.list[3].weather[0].description
  day5Desc = forecastData.list[4].weather[0].description

  displayForecastedHighs();
}

// IMAGES FOR FORECAST CARDS
var imgMostlyCloudy = "./assets/images/mostlycloudy.jpg";
var imgMostlySunny = "./assets/images/mostlysunny.jpg";
var imgRain = "./assets/images/rain.jpg";
var imgSnow = "./assets/images/snow.jpg";
var imgSunny = "./assets/images/sunny.jpg";
var imgThunderstorm = "./assets/images/thunderstorm.jpg";
var imgFoggy = "./assets/images/foggy.jpg";
var imgOvercast = "./assets/images/overcast.jpg"
var imgOther = "./assets/images/other.jpg";

// LOGIC FOR CONDITIONAL FORMATTING FROM WEATHER CONDITIONS
function updateForecastImages (n) {
  if (day1Desc == "clear sky" || day1Desc == "sunny") {
    day1ImgEl.src = imgSunny;
  } else if (day1Desc.includes("rain") == true) {
    day1ImgEl.src = imgRain;
  } else if (day1Desc.includes("clouds") == true) {
    day1ImgEl.src = imgMostlyCloudy;
  } else if (day1Desc.includes("snow") == true) {
    day1ImgEl.src = imgSnow;
  } else if (day1Desc.includes("overcast") == true) {
    day1ImgEl.src = imgOvercast;
  } else if (day1Desc.includes("storm") == true) {
    day1ImgEl.src = imgThunderstorm;
  } else if (day1Desc.includes("fog") == true) {
    day1ImgEl.src = imgFoggy;
  } else {
    day1ImgEl.src = imgOther;
  }

  if (day2Desc == "clear sky" || day2Desc == "sunny") {
    day2ImgEl.src = imgSunny;
  } else if (day2Desc.includes("rain") == true) {
    day2ImgEl.src = imgRain;
  } else if (day2Desc.includes("clouds") == true) {
    day2ImgEl.src = imgMostlyCloudy;
  } else if (day2Desc.includes("snow") == true) {
    day2ImgEl.src = imgSnow;
  } else if (day2Desc.includes("overcast") == true) {
    day2ImgEl.src = imgOvercast;
  } else if (day2Desc.includes("storm") == true) {
    day2ImgEl.src = imgThunderstorm;
  } else if (day2Desc.includes("fog") == true) {
    day2ImgEl.src = imgFoggy;
  } else {
    day2ImgEl.src = imgOther;
  }

  if (day3Desc == "clear sky" || day3Desc == "sunny") {
    day3ImgEl.src = imgSunny;
  } else if (day3Desc.includes("rain") == true) {
    day3ImgEl.src = imgRain;
  } else if (day3Desc.includes("clouds") == true) {
    day3ImgEl.src = imgMostlyCloudy;
  } else if (day3Desc.includes("snow") == true) {
    day3ImgEl.src = imgSnow;
  } else if (day3Desc.includes("overcast") == true) {
    day3ImgEl.src = imgOvercast;
  } else if (day3Desc.includes("storm") == true) {
    day3ImgEl.src = imgThunderstorm;
  } else if (day3Desc.includes("fog") == true) {
    day3ImgEl.src = imgFoggy;
  } else {
    day3ImgEl.src = imgOther;
  }

  if (day4Desc == "clear sky" || day4Desc == "sunny") {
    day4ImgEl.src = imgSunny;
  } else if (day4Desc.includes("rain") == true) {
    day4ImgEl.src = imgRain;
  } else if (day4Desc.includes("clouds") == true) {
    day4ImgEl.src = imgMostlyCloudy;
  } else if (day4Desc.includes("snow") == true) {
    day4ImgEl.src = imgSnow;
  } else if (day4Desc.includes("overcast") == true) {
    day4ImgEl.src = imgOvercast;
  } else if (day4Desc.includes("storm") == true) {
    day4ImgEl.src = imgThunderstorm;
  } else if (day4Desc.includes("fog") == true) {
    day4ImgEl.src = imgFoggy;
  } else {
    day4ImgEl.src = imgOther;
  }

  if (day5Desc == "clear sky" || day5Desc == "sunny") {
    day5ImgEl.src = imgSunny;
  } else if (day5Desc.includes("rain") == true) {
    day5ImgEl.src = imgRain;
  } else if (day5Desc.includes("clouds") == true) {
    day5ImgEl.src = imgMostlyCloudy;
  } else if (day5Desc.includes("snow") == true) {
    day5ImgEl.src = imgSnow;
  } else if (day5Desc.includes("overcast") == true) {
    day5ImgEl.src = imgOvercast;
  } else if (day5Desc.includes("storm") == true) {
    day5ImgEl.src = imgThunderstorm;
  } else if (day5Desc.includes("fog") == true) {
    day5ImgEl.src = imgFoggy;
  } else {
    day5ImgEl.src = imgOther;
  }



};

// EVENT LISTENER FOR UV INDEX BUTTON
var uvIndexBtn = document.getElementById("current-uv");
uvIndexBtn.onclick = function() {
  console.log("clicked on the UV BUTTON");
  window.open("https://www.weather.gov/rah/uv", "_blank").focus();
}

// DRAWS ALL DATA TO THE SCREEN, logic for UV index, too
function printCurrentDataToDisplay () {
  console.log("printing the data to the screen");
  currentDateEl.textContent = currentDate;
  currentTempEl.textContent = currentTemp + "℉";
  currentWindEl.textContent = currentWind + "mph";
  currentHumidityEl.textContent = currentHumidity + "%rh";
  currentUvEl.textContent = currentUVindex;
  currentCityEl.textContent = cityName;
  console.log("FINISHED printing the data to the screen");
  clearAllInputs();

  console.log(currentUVindex);
  currentUvEl.className = "";

  if (currentUVindex <= 3.00) {
    currentUvEl.classList.add("btn", "btn-primary");
  } else if (currentUVindex > 3.00 && currentData.current.uvi <= 7.00) {
    currentUvEl.classList.add("btn", "btn-warning");
  } else if (currentUVindex > 7.00) {
    currentUvEl.classList.add("btn", "btn-danger");
  } else {currentUvEl.classList.add("btn", "btn-dark");}

  console.log("day 1 desciption is: " + day1Desc);
  console.log("day 2 desciption is: " + day2Desc);
  console.log("day 3 desciption is: " + day3Desc);
  console.log("day 4 desciption is: " + day4Desc);
  console.log("day 5 desciption is: " + day5Desc);
  updateForecastImages();
}

// APPLIES CURRENT WEATHER DATA TO VARIABLES, DELAY FOR CALLED FUNCTIONS (sync issue)
function distributeCurrentData (w) {
  currentMain = w.current.weather[0].description;
  currentTemp = w.current.temp;
  currentWind = w.current.wind_speed;
  currentHumidity = w.current.humidity;
  currentUVindex = w.current.uvi;
  console.log("distributed current data");
  setTimeout(printCurrentDataToDisplay(), 500);
  setTimeout(getForecastedHighs(), 200);
};

// APPLIES FORECASTED WEATHER DATA TO VARIABLES, DELAY FOR CALLED FUNCTIONS (sync issue)
function distributeForecastData (f) {
  console.log("distributed forecasted data");
  setTimeout(printCurrentDataToDisplay(), 500);
}

// PULLS BOTH CURRENT AND FORECASTED WEATHER DATA FROM API
// ALSO, SINCE INPUT DATA WAS FILTERED AND MANIPULATED, IT CAN BE STORED TO L.S.
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
    console.log("city typed in is " + forecastData.city.name);
    cityName = forecastData.city.name;
    distributeForecastData();
  })
};

// CALCULATES THE LATITUDE AND LONGITUDE FOR THE API CALL
function makeLatLonFromZIP (zipData) {
  latitude = zipData.coord.lat;
  longitude = zipData.coord.lon;
  forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  currentURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=imperial`;
  pullAllWeatherData ();
};

// GENERATES LAT/LON from CityState Data.
function makeLatLonFromCityState (dataFromCityState) {
  latitude = dataFromCityState.coord.lat;
  longitude = dataFromCityState.coord.lon;
  currentURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=imperial`;
  forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  pullAllWeatherData ();
};

// INTERMEDIATE DATA TO MAKE LAT/LONG FROM ZIP, FROM API
function getDataFromZIP (zip) {
  urlFromZIP = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + countryCode + "&appid=" + apiKey;
  fetch(urlFromZIP)
    .then(function (zipResponse) {
      return zipResponse.json();
    })
    .then(function (zipData) {
      dataFromZIP = zipData;
      console.log(dataFromZIP);
      if (dataFromZIP.cod == "404" || dataFromZIP.message == "city not found" || dataFromZIP.message == "invalid zip code") {
        // PUT A MODAL INSTRUCTION HERE
        console.log("The city you gave cannot be found. Check your spelling...?");
        showErrorModal();
        return;
      };
      makeLatLonFromZIP(dataFromZIP);
      return dataFromZIP;
    });
};

// INTERMEDIATE DATA TO MAKE LAT/LONG FROM CITY,STATE, FROM API
function getDataFromCityState (cS) {
  urlFromCityState = "https://api.openweathermap.org/data/2.5/weather?q=" + cS + "&appid=" + apiKey;
  fetch(urlFromCityState)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    dataFromCityState = data;
    console.log(dataFromCityState);
    if (dataFromCityState.cod == "404" || dataFromCityState.message == "city not found" || dataFromCityState.message == "invalid zip code") {
      console.log("The city you gave cannot be found. Check your spelling...?");
      showErrorModal();
    } else {
      makeLatLonFromCityState(dataFromCityState);
    }
    return dataFromCityState;
  });
};

// RE-FORMATS THE USER INPUT OF A CITY,STATE
function convertUserInput () {
  cityStateArr = [];
  // userInput = userInputEl.value;
  cityStateArr = userInput.split(",");
  city = cityStateArr[0];
  state = cityStateArr[1].replace(/ /g, '');
  cityState = city + "," + state + "," + countryCode;
  // return cityState;
  // cityState = userInput;
  getDataFromCityState(cityState);
};

function runWithZIP (z) {
  getDataFromZIP(z);
};

function runWithCityState () {
  convertUserInput();
};

// THIS HAS THREE OUTCOMES: (1) zip, (2) city,state, (3) unknown
// prescribes actions on outcomes
function storeUserInput () {
  console.log("re-declaring that user input is: " + userInput);
  if (!isNaN(userInput)) {
    zipCode = userInput.toString(5);
    console.log("The ZIP Code is: " + zipCode + ".");
    localStorage.setItem("lsMostRecentWeatherSearch", zipCode);
    mostRecentSearch = localStorage.getItem("lsMostRecentWeatherSearch");
    storeSearch();
    runWithZIP(zipCode);
  } else if (userInput.includes(",") == false) {
      showErrorModal();
      return;
  } else if (userInput.includes(",") == true) {
    console.log("Passed the tests, and the city name is: " + userInput + ".");
    localStorage.setItem("lsMostRecentWeatherSearch", userInput);
    mostRecentSearch = localStorage.getItem("lsMostRecentWeatherSearch");
    storeSearch();
    runWithCityState();
  } else {
    console.log("input is unknown");
    clearAllInputs();
    showErrorModal();
    return userInput;
  };
};

function runApp () {
  displaySearchHistory();
  storeUserInput();
};

// ONCLICK FUNCTION FOR SEARCH BAR
searchButtonEl.onclick = function() {
  console.log("clicked SEARCH")
  console.log("input is " + userInputEl.value);
  userInput = userInputEl.value;
  runApp();
};

// ADDS THE ENTER-BUTTON FOR INPUT
userInputEl.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   searchButtonEl.click();
  };
});

// ON-CLICKs FOR STORED SEARCHES
searchedCityButton1El.onclick = function () {userInput = storedSearches[0]; runApp();}
searchedCityButton2El.onclick = function () {userInput = storedSearches[1]; runApp();}
searchedCityButton3El.onclick = function () {userInput = storedSearches[2]; runApp();}
searchedCityButton4El.onclick = function () {userInput = storedSearches[3]; runApp();}
searchedCityButton5El.onclick = function () {userInput = storedSearches[4]; runApp();}
searchedCityButton6El.onclick = function () {userInput = storedSearches[5]; runApp();}
searchedCityButton7El.onclick = function () {userInput = storedSearches[6]; runApp();}
searchedCityButton8El.onclick = function () {userInput = storedSearches[7]; runApp();}


// MODAL for ERRORS
function showErrorModal () {
  clearAllInputs();
  displaySearchHistory();
  errorInputModal.toggle();
}

var errorInputModal = new bootstrap.Modal(document.getElementById('bad-input-modal'))
var tryAgainBtnEl = document.getElementById("try-again-btn");
var userInputAgainEl = document.getElementById("user-input-again");


// USER STORAGE of RECENT SEARCHES
var storedSearches = JSON.parse(localStorage.getItem("lsStoredWeatherSearches")) || [];
var mostRecentSearch = localStorage.getItem("lsMostRecentWeatherSearch");

function storeSearch () {
  storedSearches.unshift(mostRecentSearch);
  storedSearches.splice(8);
  localStorage.setItem("lsStoredWeatherSearches", JSON.stringify(storedSearches));
  displaySearchHistory();
};

function displaySearchHistory () {
  searchedCityButton1El.textContent = storedSearches[0];
  searchedCityButton2El.textContent = storedSearches[1];
  searchedCityButton3El.textContent = storedSearches[2];
  searchedCityButton4El.textContent = storedSearches[3];
  searchedCityButton5El.textContent = storedSearches[4];
  searchedCityButton6El.textContent = storedSearches[5];
  searchedCityButton7El.textContent = storedSearches[6];
  searchedCityButton8El.textContent = storedSearches[7];
};

function clearAllInputs () {
  userInput = '';
  userInputEl.textContent = '';
  userInput.value = '';
  userInputEl.value = '';
}

function onPageLoad () {
  clearAllInputs();
  displaySearchHistory();
}

// PAGE IS PREPARED on load/reload
onPageLoad();
