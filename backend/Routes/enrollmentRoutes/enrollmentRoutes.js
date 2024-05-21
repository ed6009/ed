const express = require("express");
const enrollmentRouter = express.Router();
const {
  getEnrol,
  postEnrol,
  deleteEnrol,
  patchEnrol,
} = require("../../Controller/enrollmentController/enrollmentController");
const validateSchema = require("../../Controller/enrollmentController/enrollmentValidation");

enrollmentRouter.get("/getenrol", getEnrol);
enrollmentRouter.post("/postenrol", validateSchema, postEnrol);
enrollmentRouter.delete("/deleteenrol/:enrollment_id", deleteEnrol);
enrollmentRouter.patch("/patchenrol/:erollment_id", patchEnrol);

module.exports = enrollmentRouter;
