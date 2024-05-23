const express = require("express");
const employeeProfileRouter = express.Router();
const {
  getEmpPro,
  postEmpPro,
  deleteEmpPro,
  patchEmpPro,
} = require("../../Controller/employeeProfileController/employeeProfileController");
const validateSchema = require("../../Controller/employeeProfileController/employeeProfileValidation");

employeeProfileRouter.get("/getemppro", getEmpPro);
employeeProfileRouter.post("/postemppro", validateSchema, postEmpPro);
employeeProfileRouter.delete(
  "/deleteemppro/:profile_id/:emp_id",
  deleteEmpPro
);
employeeProfileRouter.patch(
  "/patchemppro/:profile_id/:emp_id",
  patchEmpPro
);

module.exports = employeeProfileRouter;
