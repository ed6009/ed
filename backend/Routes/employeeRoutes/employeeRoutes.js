const express = require("express");
const employeeRouter = express.Router();
const {
  getEmp,
  postEmp,
  deleteEmp,
  patchEmpName,
  patchEmpPassword
} = require("../../Controller/employeeController/employeeController");
const validateSchema = require("../../Controller/employeeController/employeeValidation");

employeeRouter.get("/getemp", getEmp);
employeeRouter.post("/postemp", validateSchema, postEmp);
employeeRouter.delete("/deleteemp/:emp_id", deleteEmp);
employeeRouter.patch("/patchempname/:emp_id", patchEmpName);
employeeRouter.patch("/patchemppassword/:emp_id", patchEmpPassword)

module.exports = employeeRouter;
