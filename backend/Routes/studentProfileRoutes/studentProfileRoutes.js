const express = require("express");
const studentProfileRouter = express.Router();
const {
  getStdPro,
  postStdPro,
  deleteStdPro,
  patchStdPro,
} = require("../../Controller/studentProfileController/studentProfileController");
const validateSchema = require("../../Controller/studentProfileController/studentProfileValidation");

/**
 * @swagger
 * components:
 *      schemas:
 *          studentprofile:
 *              type: object
 *              properties:
 *                  profile_id:
 *                      type: integer
 *                      description: The unique identifier for a profile
 *                  student_id:
 *                      type: integer
 *                      description: The unique identifier for a student
 *                  age:
 *                      type: string
 *                      description: The age of the student
 *                  gender:
 *                      type: string
 *                      description: The gender of the student
 *                  email:
 *                      type: string
 *                      description: The email of the student
 */

/**
 * @swagger
 * /getstdpro:
 *          get:
 *              summary: Retrieve all student profile records
 *              description: Retrieve a list of all student profile records from the database.
 *              tags: ["student profile"]
 *              responses:
 *                  200:
 *                      description: Successfully retrieved the list of student profile records.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/studentprofile'
 */

/**
 * @swagger
 * /poststdpro:
 *          post:
 *              summary: Add a new student profile record
 *              description: Add a new student profile record to the database.
 *              tags: ["student profile"]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/studentprofile'
 *              responses:
 *                  200:
 *                      description: Successfully added the new student profile record.
 */

/**
 * @swagger
 * /deletestdpro/{profile_id}/{student_id}:
 *          delete:
 *              summary: Delete a student profile record
 *              description: Delete a student profile record from the database using the student ID.
 *              tags: ["student profile"]
 *              parameters:
 *                  - in: path
 *                    name: profile_id
 *                    required: true
 *                    description: The ID of the profile to be deleted
 *                    schema:
 *                        type: integer
 *                  - in: path
 *                    name: student_id
 *                    required: true
 *                    description: The ID of the student to be deleted
 *                    schema:
 *                        type: integer
 *              responses:
 *                  200:
 *                      description: Successfully deleted the student profile record.
 */

/**
 * @swagger
 * /patchstdpro/{profile_id}/{student_id}:
 *          patch:
 *              summary: Update a student profile record
 *              description: Update a student profile record in the database using the student ID.
 *              tags: ["student profile"]
 *              parameters:
 *                  - in: path
 *                    name: profile_id
 *                    required: true
 *                    description: The ID of the profile to be updated
 *                    schema:
 *                        type: integer
 *                  - in: path
 *                    name: student_id
 *                    required: true
 *                    description: The ID of the student to be updated
 *                    schema:
 *                        type: integer
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/studentprofile'
 *              responses:
 *                  200:
 *                      description: Successfully updated the student profile record.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/studentprofile'
 */

studentProfileRouter.get("/getstdpro", getStdPro);
studentProfileRouter.post("/poststdpro", validateSchema, postStdPro);
studentProfileRouter.delete(
  "/deletestdpro/:profile_id/:student_id",
  deleteStdPro
);
studentProfileRouter.patch("/patchstdpro/:profile_id/:student_id", patchStdPro);

module.exports = studentProfileRouter;
