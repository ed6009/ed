const express = require("express");
const employeeRouter = express.Router();
const {
  getEmp,
  postEmp,
  deleteEmp,
  patchEmpName,
} = require("../../Controller/employeeController/employeeController");
const validateSchema = require("../../Controller/employeeController/employeeValidation");

/**
 * @swagger
 * components:
 *      schemas:
 *          employee:
 *              type: object
 *              properties:
 *                  emp_id:
 *                      type: integer
 *                      description: The unique identifier for a employee
 *                  emp_name:
 *                      type: string
 *                      description: The name of the employee
 */

/**
 * @swagger
 * /getemp:
 *          get:
 *              summary: Retrieve all employee records
 *              description: Retrieve a list of all employee records from the database.
 *              tags: ["employee"]
 *              responses:
 *                  200:
 *                      description: Successfully retrieved the list of employee records.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/employee'
 */

/**
 * @swagger
 * /postemp:
 *          post:
 *              summary: Add a new employee record
 *              description: Add a new employee record to the database.
 *              tags: ["employee"]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/employee'
 *              responses:
 *                  200:
 *                      description: Successfully added the new employee record.
 */

/**
 * @swagger
 * /deleteemp/{emp_id}:
 *          delete:
 *              summary: Delete a employee record
 *              description: Delete a employee record from the database using the employee ID.
 *              tags: ["employee"]
 *              parameters:
 *                  - in: path
 *                    name: emp_id
 *                    required: true
 *                    description: The ID of the employee to be deleted
 *                    schema:
 *                        type: integer
 *              responses:
 *                  200:
 *                      description: Successfully deleted the employee record.
 */

/**
 * @swagger
 * /patchempname/{emp_id}:
 *          patch:
 *              summary: Update a employee record
 *              description: Update a employee record in the database using the employee ID.
 *              tags: ["employee"]
 *              parameters:
 *                  - in: path
 *                    name: emp_id
 *                    required: true
 *                    description: The ID of the employee to be updated
 *                    schema:
 *                        type: integer
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/employee'
 *              responses:
 *                  200:
 *                      description: Successfully updated the employee record.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/employee'
 */

employeeRouter.get("/getemp", getEmp);
employeeRouter.post("/postemp", validateSchema, postEmp);
employeeRouter.delete("/deleteemp/:emp_id", deleteEmp);
employeeRouter.patch("/patchempname/:emp_id", patchEmpName);

module.exports = employeeRouter;
