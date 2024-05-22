const Joi = require("joi");

const schema = Joi.object({
  enrollment_id: Joi.string().min(2).max(5).required(),
  student_id: Joi.string().min(2).max(5).required(),
  course_id: Joi.string().min(2).max(5).required(),
  enrollment_date: Joi.date().required(),
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
