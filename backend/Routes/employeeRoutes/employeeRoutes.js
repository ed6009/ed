const express = require("express");
const employeeRouter = express.Router();
const {
  getEmp,
  postEmp,
  deleteEmp,
  patchEmpPassword,
  patchEmpName,
} = require("../../Controller/employeeController/employeeController");
const validateSchema = require("../../Controller/employeeController/employeeValidation");

employeeRouter.get("/getemp", getEmp);
employeeRouter.post("/postemp", validateSchema, postEmp);
employeeRouter.delete("/deleteemp/:emp_id", deleteEmp);
employeeRouter.patch("/patchemppass/:emp_id", patchEmpPassword);
employeeRouter.patch("/patchempname/:emp_id", patchEmpName);

module.exports = employeeRouter;
