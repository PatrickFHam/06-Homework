# Weather Dashboard
Link to the Weather Dashboard: https://patrickfham.github.io/WeatherDashboard/

## How it Works

The user will provide either a ZIP code or a City, State.
The program will detect which type was provided, and proceed to generate latitude/longitude data. (With this API, lat/lon was the only way to allow for more than one type of user input.)
The program will present an error message via modal, if it detects the ZIP code or city are invalid: too-many or not-enough numbers, numbers in the city name, non-existent ZIPs or cities, etc.

Current conditions are displayed.
UV index is shown, with color-coded severity.  Clicking on the UV index will open a new tab with UV index information from the National Weather Service.

The program will fetch all the temps, winds, and humidities; it will fetch and display only the highs of each.
Each forecasted day of the week and date are shown.
Each forecasted day's image changes to coordinate with the weather conditions of that day.

Local storage was used to save the eight(8)-most-recent searches, which are immediately searchable again by clicking on them.


## Technologies Used
- [OpenWeatherMap API](https://openweathermap.org/api)
- HTML/CSS/BootStrap
- JavaScript
- jQuery

## Video Demo
https://watch.screencastify.com/v/ylV6emZXBSFvgrBMQGSn


## Screenshots
![CityStateInput](./assets/screenshots/citysearch.jpg)
![UVindexAndForecastCards](./assets/screenshots/uvindexandforecastcards.jpg)
![Wonky Input](./assets/screenshots/wonkyinput.jpg)
![ErrorModal](./assets/screenshots/errormodal.jpg)
