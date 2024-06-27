const Joi = require("joi");

const schema = Joi.object({
  emp_id: Joi.string().min(2).max(5).required(),
  email: Joi.string().email().required(),
  phone_number: Joi.string().min(10).required(),
  gender: Joi.string().required(),
  profile_photo: Joi.string().min(1).max(255),
  attach_document: Joi.string().min(1).max(255),
  address: Joi.string(),
  city: Joi.string(),
  state: Joi.string(),
  salary: Joi.number(),
  nationality: Joi.string(),
  marital_status: Joi.string(),
  dob: Joi.date(),
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
