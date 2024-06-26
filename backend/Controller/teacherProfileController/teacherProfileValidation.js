const Joi = require("joi");

const schema = Joi.object({
  teacher_id: Joi.string().min(2).max(5),
  gender: Joi.string().min(4).max(6).required(),
  email: Joi.string().email().required(),
  address: Joi.string(),
  city: Joi.string(),
  state: Joi.string(),
  marital_status: Joi.string(),
  nationality: Joi.string(),
  salary: Joi.number(),
  profile_photo: Joi.string(),
  doj: Joi.date(),
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
