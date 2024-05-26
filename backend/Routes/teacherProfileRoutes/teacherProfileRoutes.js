const express = require("express");
const teacherProfileRouter = express.Router();
const {
  getTchrPro,
  postTchrPro,
  deleteTchrPro,
  patchTchrPro,
} = require("../../Controller/teacherProfileController/teacherProfileController");
const validateSchema = require("../../Controller/teacherProfileController/teacherProfileValidation");
const upload = require("../../Model/Multer/multerconfig");

teacherProfileRouter.get("/gettchrpro", getTchrPro);
teacherProfileRouter.post(
  "/posttchrpro",
  upload.single("image"),
  validateSchema,
  postTchrPro
);
teacherProfileRouter.delete(
  "/deletetchrpro/:profile_id/:teacher_id",
  deleteTchrPro
);
teacherProfileRouter.patch(
  "/patchtchrpro/:profile_id/:teacher_id",
  patchTchrPro
);

module.exports = teacherProfileRouter;
