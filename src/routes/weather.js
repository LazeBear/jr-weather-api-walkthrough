const express = require('express');

const countryAndCityValidator = require('../middleware/countryAndCityValidator');
const { getWeather } = require('../controllers/weather');

const router = express.Router();

router.get('/', countryAndCityValidator, getWeather);

module.exports = router;
