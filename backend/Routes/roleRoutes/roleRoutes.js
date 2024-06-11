const express = require("express");

const roleRouter = express.Router();

const {
  getRole,
  postRole,
  deleteRole,
  patchRoleName,
} = require("../../Controller/roleController/roleController");

const validateSchema =
  require("../../Controller/roleController/roleValidation");

roleRouter.get("/getrole", getRole);
roleRouter.post("/postrole", validateSchema, postRole);
roleRouter.delete("/deleterole/:role_id", deleteRole);
roleRouter.patch("/patchrolename/:role_id", patchRoleName);

module.exports = roleRouter;
