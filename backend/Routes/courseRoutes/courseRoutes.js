const express = require("express");
const courseRouter = express.Router();
const {
  getCourse,
  postCourse,
  deleteCourse,
  patchCourse,
} = require("../../Controller/courseController/courseController");
const validateSchema = require("../../Controller/courseController/courseValidation");

courseRouter.get("/getcourse", getCourse);
courseRouter.post("/postcourse", validateSchema, postCourse);
courseRouter.delete("/deletecourse/:course_id", deleteCourse);
courseRouter.patch("/patchcourse/:course_id", patchCourse);

module.exports = courseRouter;
