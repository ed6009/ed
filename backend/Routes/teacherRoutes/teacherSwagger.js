/**
 * @swagger
 * components:
 *      schemas:
 *          teacher:
 *              type: object
 *              properties:
 *                  teacher_id:
 *                      type: string
 *                      description: The unique identifier for a teacher
 *                  teacher_name:
 *                      type: string
 *                      description: The name of the teacher
 */

/**
 * @swagger
 * /gettchr:
 *          get:
 *              summary: Retrieve all teacher records
 *              description: Retrieve a list of all teacher records from the database.
 *              tags: ["teacher"]
 *              responses:
 *                  200:
 *                      description: Successfully retrieved the list of teacher records.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/teacher'
 */

/**
 * @swagger
 * /posttchr:
 *          post:
 *              summary: Add a new teacher record
 *              description: Add a new teacher record to the database.
 *              tags: ["teacher"]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/teacher'
 *              responses:
 *                  200:
 *                      description: Successfully added the new teacher record.
 */

/**
 * @swagger
 * /deletetchr/{teacher_id}:
 *          delete:
 *              summary: Delete a teacher record
 *              description: Delete a teacher record from the database using the teacher ID.
 *              tags: ["teacher"]
 *              parameters:
 *                  - in: path
 *                    name: teacher_id
 *                    required: true
 *                    description: The ID of the teacher to be deleted
 *                    schema:
 *                        type: string
 *              responses:
 *                  200:
 *                      description: Successfully deleted the teacher record.
 */

/**
 * @swagger
 * /patchtchrname/{teacher_id}:
 *          patch:
 *              summary: Update a teacher record
 *              description: Update a teacher record in the database using the teacher ID.
 *              tags: ["teacher"]
 *              parameters:
 *                  - in: path
 *                    name: teacher_id
 *                    required: true
 *                    description: The ID of the teacher to be updated
 *                    schema:
 *                        type: string
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/teacher'
 *              responses:
 *                  200:
 *                      description: Successfully updated the teacher record.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/teacher'
 */

/**
 * @swagger
 * /patchtchrpassword/{teacher_id}:
 *          patch:
 *              summary: Update a teacher password
 *              description: Update a teacher record in the database using the teacher ID.
 *              tags: ["teacher"]
 *              parameters:
 *                  - in: path
 *                    name: teacher_id
 *                    required: true
 *                    description: The ID of the teacher to be updated
 *                    schema:
 *                        type: string
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/teacher'
 *              responses:
 *                  200:
 *                      description: Successfully updated the teacher record.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/teacher'
 */
