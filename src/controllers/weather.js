const responseFormatter = require('../utils/responseFormatter');
const weather = require('../models/Weather');

function getWeather(req, res, next) {
  const { cc, city, weatherType } = req.query;
  weather
    .getData(city, cc, weatherType)
    .then((response) => responseFormatter(res, 200, null, response))
    .catch((err) => next(err));
}

module.exports = { getWeather };
