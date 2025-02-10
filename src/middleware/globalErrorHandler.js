const { ValidationError } = require("sequelize");

const errorHandler = (err, req, res, next) => {
  console.error(err);

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal server error";

  if (err instanceof ValidationError) {
    statusCode = 400;
    message = err.errors.map((e) => e.message);
  }

  res.status(statusCode).json({ success: false, message });
};

module.exports = errorHandler;
