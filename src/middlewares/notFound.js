const responseFormatter = require('../utils/responseFormatter');

module.exports = (req, res, next) =>
  responseFormatter(res, 404, 'api end points not found', null);
