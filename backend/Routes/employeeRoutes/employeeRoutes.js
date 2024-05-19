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
employeeRouter.post("/postemp", postEmp, validateSchema);
employeeRouter.delete("/deleteemp", deleteEmp);
employeeRouter.patch("/patchemppass", patchEmpPassword);
employeeRouter.patch("/patchempname", patchEmpName);
