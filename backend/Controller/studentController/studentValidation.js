const Joi = require("joi");

const schema = Joi.object({
  student_id: Joi.string().min(2).max(5).required(),
  student_name: Joi.string().min(2).max(30).required(),
  password: Joi.string().min(8).max(20).required(),
  status: Joi.string(),
  education: Joi.string(),
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
