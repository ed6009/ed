const Joi = require("joi");

const schema = Joi.object({
  profile_id: Joi.string().min(2).max(5).required(),
  student_id: Joi.string().min(2).max(5).required(),
  age: Joi.number().min(20).max(50).required(),
  gender: Joi.string().min(4).max(6).required(),
  email: Joi.string().email().required(),
  student_documentation: Joi.string().min(1).max(255),
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
