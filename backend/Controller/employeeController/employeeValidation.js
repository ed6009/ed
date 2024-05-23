const Joi = require("joi");

const schema = Joi.object({
  emp_id: Joi.string().min(2).max(5).required(),
  emp_name: Joi.string().min(2).max(30).required(),
  password: Joi.string().min(8).max(20).required(),
  qualification: Joi.string().required(),
  status: Joi.string().required(),
  doj: Joi.date().required(),
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
