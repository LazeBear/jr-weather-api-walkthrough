const express = require('express');
require('dotenv').config();
const routes = require('./routes');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./utils/logger');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('common'));
}
app.use(routes);

app.listen(PORT, () => logger.info(`app listen on port ${PORT}`));
