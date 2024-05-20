const express = require("express");
const studentRouter = express.Router();
const {
  getStd,
  postStd,
  deleteStd,
  patchStdName,
} = require("../../Controller/studentController/studentController");
const validateSchema = require("../../Controller/studentController/studentValidation");

studentRouter.get("/getstd", getStd);
studentRouter.post("/poststd", validateSchema, postStd);
studentRouter.delete("/deletestd/:student_id", deleteStd);
studentRouter.patch("/patchstdname/:student_id", patchStdName);

module.exports = studentRouter;
