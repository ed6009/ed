const express = require("express");
const studentProfileRouter = express.Router();
const {
  getStdPro,
  postStdPro,
  deleteStdPro,
  patchStdPro,
} = require("../../Controller/studentProfileController/studentProfileController");
const validateSchema = require("../../Controller/studentProfileController/studentProfileValidation");
const upload = require("../../Model/Multer/multerconfig");

studentProfileRouter.get("/getstdpro", getStdPro);
studentProfileRouter.post(
  "/poststdpro",
  upload.single("image"),
  validateSchema,
  postStdPro
);
studentProfileRouter.delete(
  "/deletestdpro/:profile_id/:student_id",
  deleteStdPro
);
studentProfileRouter.patch("/patchstdpro/:profile_id/:student_id", patchStdPro);

module.exports = studentProfileRouter;
