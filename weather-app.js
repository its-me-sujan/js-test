const axios = require("axios");

// make axios call here
const fetchWeatherData = async () => {
  axios.get("https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto").then(function (response) {
    console.log(response);
  });
};

// Usage example (inside an async function)
async function getWeather() {
  try {
    const response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}    

//call the async function to fetch and display the wather data
getWeather();
