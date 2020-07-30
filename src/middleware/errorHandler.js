const responseFormatter = require('../utils/responseFormatter');
const logger = require('../utils/logger');

module.exports = (error, req, res, next) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const data = error.response.data;
    if (data.cod === '429') {
      logger.warn(data.message);
      return responseFormatter(
        res,
        503,
        'The server is busy at the moment, please try again later',
        null
      );
    }
    return responseFormatter(
      res,
      Number.parseInt(data.cod),
      data.message,
      null
    );
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    logger.warn(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    logger.error(error.message);
  }
  logger.error(error.stack);
  return responseFormatter(
    res,
    500,
    'Something failed, we are investigating!',
    null
  );
};
