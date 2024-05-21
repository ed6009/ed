const Joi = require("joi");

const schema = Joi.object({
  profile_id: Joi.number().min(1).max(5).required(),
  teacher_id: Joi.number().min(1).max(5).required(),
  age: Joi.number().min(20).max(50).required(),
  gender: Joi.string().min(4).max(6).required(),
  email: Joi.string().email().required(),
});

const validateSchema = (req, res, next) => {
  const value = schema.validate(req.body);
  if (value.error) {
    res.send({ error: value.error.details[0] });
  } else {
    next();
  }
};

module.exports = validateSchema;
