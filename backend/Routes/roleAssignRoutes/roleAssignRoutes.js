const express = require("express");

const roleAssignRouter = express.Router();

const {
  getRoleAssign,
  postRoleAssign,
  deleteRoleAssign,
  patchRoleAssign,
} = require("../../Controller/roleAssignController/roleAssignController");

roleAssignRouter.get("/getroleassign", getRoleAssign);
roleAssignRouter.post("/postroleassign", postRoleAssign);
roleAssignRouter.delete("/deleteroleassign/:role_id/:emp_id", deleteRoleAssign);
roleAssignRouter.patch(
  "/patchroleassign/:old_role_id/:old_emp_id",
  patchRoleAssign
);

module.exports = roleAssignRouter;
