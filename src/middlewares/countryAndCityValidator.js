const { getCode, getName } = require('country-list');
const responseFormatter = require('../utils/responseFormatter');
module.exports = (req, res, next) => {
  const { cc, city } = req.query;
  if (!cc || !city) {
    return responseFormatter(
      res,
      400,
      'country or city parameter is missing',
      null
    );
  }
  if (cc.length === 2) {
    if (getName(cc)) {
      return next();
    }
  } else {
    if (getCode(cc)) {
      req.params.cc = getCode(cc);
      return next();
    }
  }
  return responseFormatter(
    res,
    400,
    'Invalid country name or country code',
    null
  );
};
