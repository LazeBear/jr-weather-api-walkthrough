const express = require('express');
const weatherRoutes = require('./routes/weather');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('welcome');
});

router.use('/api/weather', weatherRoutes);

module.exports = router;
