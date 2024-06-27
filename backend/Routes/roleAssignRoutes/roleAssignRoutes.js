const express = require("express");
const roleAssignRouter = express.Router();
const {
  getRoleAssign,
  postRoleAssign,
  deleteRoleAssign,
  patchRoleAssign,
  getSingleRoleAssign
} = require("../../Controller/roleAssignController/roleAssignController");
const validateSchema = require("../../Controller/roleAssignController/roleAssignValidation");

roleAssignRouter.get("/getroleassign", getRoleAssign);
roleAssignRouter.post("/postroleassign", validateSchema, postRoleAssign);
roleAssignRouter.delete("/deleteroleassign/:role_id/:emp_id", deleteRoleAssign);
roleAssignRouter.patch(
  "/patchroleassign/:old_role_id/:old_emp_id",
  patchRoleAssign
);
roleAssignRouter.get("/getsingleroleassign/:emp_id", getSingleRoleAssign);

module.exports = roleAssignRouter;
