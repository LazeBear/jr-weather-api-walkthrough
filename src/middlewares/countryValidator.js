const { getCode, getName } = require('country-list');
const responseFormatter = require('../utils/responseFormatter');
module.exports = (req, res, next) => {
  const { cc } = req.params;
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
