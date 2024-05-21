const express = require("express");
const teacherProfileRouter = express.Router();
const {
  getTchrPro,
  postTchrPro,
  deleteTchrPro,
  patchTchrPro,
} = require("../../Controller/teacherProfileController/teacherProfileController");
const validateSchema = require("../../Controller/teacherProfileController/teacherProfileValidation");

/**
 * @swagger
 * components:
 *      schemas:
 *          teacherprofile:
 *              type: object
 *              properties:
 *                  profile_id:
 *                      type: integer
 *                      description: The unique identifier for a profile
 *                  teacher_id:
 *                      type: integer
 *                      description: The unique identifier for a teacher
 *                  age:
 *                      type: string
 *                      description: The age of the teacher
 *                  gender:
 *                      type: string
 *                      description: The gender of the teacher
 *                  email:
 *                      type: string
 *                      description: The email of the teacher
 */

/**
 * @swagger
 * /gettchrpro:
 *          get:
 *              summary: Retrieve all teacher profile records
 *              description: Retrieve a list of all teacher profile records from the database.
 *              tags: ["teacher profile"]
 *              responses:
 *                  200:
 *                      description: Successfully retrieved the list of teacher profile records.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/teacherprofile'
 */

/**
 * @swagger
 * /posttchrpro:
 *          post:
 *              summary: Add a new teacher profile record
 *              description: Add a new teacher profile record to the database.
 *              tags: ["teacher profile"]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/teacherprofile'
 *              responses:
 *                  200:
 *                      description: Successfully added the new teacher profile record.
 */

/**
 * @swagger
 * /deletetchrpro/{profile_id}/{teacher_id}:
 *          delete:
 *              summary: Delete a teacher profile record
 *              description: Delete a teacher profile record from the database using the teacher ID.
 *              tags: ["teacher profile"]
 *              parameters:
 *                  - in: path
 *                    name: profile_id
 *                    required: true
 *                    description: The ID of the profile to be deleted
 *                    schema:
 *                        type: integer
 *                  - in: path
 *                    name: teacher_id
 *                    required: true
 *                    description: The ID of the teacher to be deleted
 *                    schema:
 *                        type: integer
 *              responses:
 *                  200:
 *                      description: Successfully deleted the teacher profile record.
 */

/**
 * @swagger
 * /patchtchrpro/{profile_id}/{teacher_id}:
 *          patch:
 *              summary: Update a teacher profile record
 *              description: Update a teacher profile record in the database using the teacher ID.
 *              tags: ["teacher profile"]
 *              parameters:
 *                  - in: path
 *                    name: profile_id
 *                    required: true
 *                    description: The ID of the profile to be updated
 *                    schema:
 *                        type: integer
 *                  - in: path
 *                    name: teacher_id
 *                    required: true
 *                    description: The ID of the teacher to be updated
 *                    schema:
 *                        type: integer
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/teacherprofile'
 *              responses:
 *                  200:
 *                      description: Successfully updated the teacher profile record.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/teacherprofile'
 */

teacherProfileRouter.get("/gettchrpro", getTchrPro);
teacherProfileRouter.post("/posttchrpro", validateSchema, postTchrPro);
teacherProfileRouter.delete(
  "/deletetchrpro/:profile_id/:teacher_id",
  deleteTchrPro
);
teacherProfileRouter.patch("/patchtchrpro/:profile_id/:teacher_id", patchTchrPro);

module.exports = teacherProfileRouter;
