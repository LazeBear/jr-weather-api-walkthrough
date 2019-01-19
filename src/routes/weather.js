const express = require('express');
const axios = require('../utils/axios');
const weather = require('../models/Weather');
const responseFormatter = require('../utils/responseFormatter');

const router = express.Router();
const APPID = process.env.APPID;

router.get('/:cc/:city', (req, res) => {
  const { cc, city } = req.params;
  const weatherType = req.query.weatherType;
  weather
    .getData(city, cc, weatherType)
    .then(response => responseFormatter(res, 200, null, response))
    .catch(err => console.log(err));
});

module.exports = router;
