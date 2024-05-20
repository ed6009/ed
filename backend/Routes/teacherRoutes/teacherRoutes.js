const express = require("express");
const teacherRouter = express.Router();
const {
  getTchr,
  postTchr,
  deleteTchr,
  patchTchrName,
} = require("../../Controller/teacherController/teacherController");
const validateSchema = require("../../Controller/teacherController/teacherValidation");

teacherRouter.get("/getTchr", getTchr);
teacherRouter.post("/postTchr", validateSchema, postTchr);
teacherRouter.delete("/deleteTchr/:teacher_id", deleteTchr);
teacherRouter.patch("/patchTchrname/:teacher_id", patchTchrName);

module.exports = teacherRouter;
