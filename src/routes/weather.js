const express = require('express');
const weather = require('../models/Weather');
const responseFormatter = require('../utils/responseFormatter');
const countryAndCityValidator = require('../middlewares/countryAndCityValidator');

const router = express.Router();

router.get('/', countryAndCityValidator, (req, res, next) => {
  const { cc, city, weatherType } = req.query;
  weather
    .getData(city, cc, weatherType)
    .then(response => responseFormatter(res, 200, null, response))
    .catch(err => next(err));
});

module.exports = router;
