const Joi = require("joi");

const schema = Joi.object({
  course_id: Joi.string().min(2).max(5).required(),
  course_name: Joi.string().min(3).max(20).required(),
  course_description: Joi.string().required(),
  teacher_id: Joi.string().min(2).max(5).required(),
  syllabus: Joi.string().required(),
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
