const sanitizeInput = require("../utils/sanitizeInput");

const sanitizeMiddleware = (req, res, next) => {
  if (req.body) {
    for (const key in req.body) {
      req.body[key] = sanitizeInput(req.body[key]);
    }
  }

  if (req.query) {
    for (const key in req.query) {
      req.query[key] = sanitizeInput(req.query[key]);
    }
  }

  if (req.params) {
    for (const key in req.params) {
      req.params[key] = sanitizeInput(req.params[key]);
    }
  }

  next();
};

module.exports = sanitizeMiddleware;
