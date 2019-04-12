const express = require('express');
const weather = require('../models/Weather');
const responseFormatter = require('../utils/responseFormatter');
const countryValidator = require('../middlewares/countryValidator');

const router = express.Router();

router.get('country/:cc/city/:city', countryValidator, (req, res, next) => {
  const { cc, city } = req.params;
  const weatherType = req.query.weatherType;
  weather
    .getData(city, cc, weatherType)
    .then(response => responseFormatter(res, 200, null, response))
    .catch(err => next(err));
});

module.exports = router;
