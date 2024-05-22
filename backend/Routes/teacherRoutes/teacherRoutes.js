const express = require("express");
const teacherRouter = express.Router();
const {
  getTchr,
  postTchr,
  deleteTchr,
  patchTchrName,
  patchTchrPassword,
} = require("../../Controller/teacherController/teacherController");
const validateSchema = require("../../Controller/teacherController/teacherValidation");

teacherRouter.get("/gettchr", getTchr);
teacherRouter.post("/posttchr", validateSchema, postTchr);
teacherRouter.delete("/deletetchr/:teacher_id", deleteTchr);
teacherRouter.patch("/patchtchrname/:teacher_id", patchTchrName);
teacherRouter.patch("/patchtchrpassword/:teacher_id", patchTchrPassword);

module.exports = teacherRouter;
