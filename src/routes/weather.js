const express = require('express');
const axios = require('../utils/axios');

const router = express.Router();
const APPID = process.env.APPID;

router.get('/:cc/:city', (req, res) => {
  const { cc, city } = req.params;

  axios
    .get(`/weather?q=${city},${cc}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => console.log(err));
});

module.exports = router;
