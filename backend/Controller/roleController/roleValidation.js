const Joi = require("joi")

const schema = Joi.object({
    role_id: Joi.number().min(1).max(5).required(),
    role_name: Joi.string().min(3).max(30).required(),
})

const validateSchema = (req, res, next) => {
  const value = schema.validate(req.body);
  if (value.error) {
    res.send({ error: value.error.details[0] });
  } else {
    next();
  }
};

module.exports = validateSchema;