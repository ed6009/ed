const joi = require("joi");

const schema = joi.object({
  emp_id: joi.number().min(1).max(5).required(),
  emp_name: joi.string().min(1).max(30).required(),
  password: joi.string().min(8).max(30).required(),
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
