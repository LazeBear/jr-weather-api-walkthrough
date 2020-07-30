const axios = require('../utils/axios');
const City = require('./City');
const ForecastWeather = require('./ForecastWeather');
const CurrentWeather = require('./CurrentWeather');

class Weather {
  constructor() {}

  getData(city, country, weatherType) {
    // const key = `${city}/co`
    return Promise.all(getWeatherData(city, country)).then((dataArray) => {
      const current = dataArray[0].data;
      const forecast = dataArray[1].data;
      const weather = {
        city: new City(forecast.city),
        current: new CurrentWeather(current),
        forecast: forecast.list.map((i) => new ForecastWeather(i))
      };
      if (weatherType === 'current') {
        weather.current = new CurrentWeather(current);
      } else if (weatherType === 'forecast') {
        weather.forecast = forecast.list.map((i) => new ForecastWeather(i));
      } else {
        weather.current = new CurrentWeather(current);
        weather.forecast = forecast.list.map((i) => new ForecastWeather(i));
      }
      return weather;
    });
  }
}
module.exports = new Weather();

function getWeatherData(city, country) {
  const queryString = `${city},${country}`;
  const urls = ['/weather', '/forecast'];
  return urls.map((i) => {
    return axios.get(i, { params: { q: queryString } });
  });
}
