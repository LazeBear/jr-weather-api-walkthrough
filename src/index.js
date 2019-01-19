const express = require('express');
require('dotenv').config();
const routes = require('./routes');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const logger = require('./utils/logger');
const notFoundHandler = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());
app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('common'));
}
app.use(routes);
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => logger.info(`app listen on port ${PORT}`));
