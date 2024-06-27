const express = require("express");
const employeeProfileRouter = express.Router();
const {
  getEmpPro,
  postEmpPro,
  deleteEmpPro,
  patchEmpPro,
  getSinglePro,
} = require("../../Controller/employeeProfileController/employeeProfileController");
const validateSchema = require("../../Controller/employeeProfileController/employeeProfileValidation");
const upload = require("../../Model/Multer/multerconfig");

employeeProfileRouter.get("/getemppro", getEmpPro);
employeeProfileRouter.get("/getsingleemppro/:emp_id", getSinglePro);
employeeProfileRouter.post(
  "/postemppro",
  upload.single("profile_photo"),
  validateSchema,
  postEmpPro
);
employeeProfileRouter.delete("/deleteemppro/:profile_id/:emp_id", deleteEmpPro);
employeeProfileRouter.patch("/patchemppro/:profile_id/:emp_id", patchEmpPro);

module.exports = employeeProfileRouter;
