const express = require("express");
const employeeRouter = express.Router();
const {
  getEmp,
  postEmp,
  deleteEmp,
  patchEmp,
  patchEmpPassword
} = require("../../Controller/employeeController/employeeController");
const validateSchema = require("../../Controller/employeeController/employeeValidation");

employeeRouter.get("/getemp", getEmp);
employeeRouter.post("/postemp", validateSchema, postEmp);
employeeRouter.delete("/deleteemp/:emp_id", deleteEmp);
employeeRouter.patch("/patchemp/:emp_id", patchEmp);
employeeRouter.patch("/patchemppassword/:emp_id", patchEmpPassword)

module.exports = employeeRouter;
