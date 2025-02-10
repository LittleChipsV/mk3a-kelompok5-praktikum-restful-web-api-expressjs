const Joi = require("joi");

const bookSchema = Joi.object({
  title: Joi.string().trim().max(255).required(),
  writer: Joi.string().trim().max(255).required(),
  publisher: Joi.string().trim().max(255).required(),
  year: Joi.number().integer().max(new Date().getFullYear()).required(),
  user_id: Joi.number().integer().allow(null),
  category_id: Joi.number().integer().required(),
});

module.exports = bookSchema;
