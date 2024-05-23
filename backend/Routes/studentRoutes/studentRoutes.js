const express = require("express");
const studentRouter = express.Router();
const {
  getStd,
  postStd,
  deleteStd,
  patchStd,
  patchStdPassword,
} = require("../../Controller/studentController/studentController");
const validateSchema = require("../../Controller/studentController/studentValidation");

studentRouter.get("/getstd", getStd);
studentRouter.post("/poststd", validateSchema, postStd);
studentRouter.delete("/deletestd/:student_id", deleteStd);
studentRouter.patch("/patchstd/:student_id", patchStd);
studentRouter.patch("/patchstdpassword/:student_id", patchStdPassword);

module.exports = studentRouter;
