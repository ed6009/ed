const Joi = require("joi");

const schema = Joi.object({
  student_id: Joi.number().min(1).max(5).required(),
  student_name: Joi.string().min(2).max(30).required(),
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
