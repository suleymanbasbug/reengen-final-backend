const Joi = require("joi");

const createValidation = Joi.object({
  name: Joi.string()
    .required()
    .min(8)
    .regex(/^[a-zA-Z]*$/),
  email: Joi.string().required().email(),
  password: Joi.string()
    .required()
    .min(6)
    .regex(/^(?=.{6,32}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*/),
  isAdmin: Joi.boolean().required(),
});

const loginValidation = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string()
    .required()
    .min(6)
    .regex(/^(?=.{6,32}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*/),
});

module.exports = {
  createValidation,
  loginValidation,
};
