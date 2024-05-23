/**
 * @swagger
 * components:
 *      schemas:
 *          student:
 *              type: object
 *              properties:
 *                  student_id:
 *                      type: string
 *                      description: The unique identifier for a student
 *                  student_name:
 *                      type: string
 *                      description: The name of the student
 *                  password:
 *                      type: string
 *                      description: The password of the student
 *                  status:
 *                      type: string
 *                      description: The status of the student
 *                  education:
 *                      type: string
 *                      description: The education of the student
 */

/**
 * @swagger
 * /getstd:
 *          get:
 *              summary: Retrieve all student records
 *              description: Retrieve a list of all student records from the database.
 *              tags: ["student"]
 *              responses:
 *                  200:
 *                      description: Successfully retrieved the list of student records.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/student'
 */

/**
 * @swagger
 * /poststd:
 *          post:
 *              summary: Add a new student record
 *              description: Add a new student record to the database.
 *              tags: ["student"]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/student'
 *              responses:
 *                  200:
 *                      description: Successfully added the new student record.
 */

/**
 * @swagger
 * /deletestd/{student_id}:
 *          delete:
 *              summary: Delete a student record
 *              description: Delete a student record from the database using the student ID.
 *              tags: ["student"]
 *              parameters:
 *                  - in: path
 *                    name: student_id
 *                    required: true
 *                    description: The ID of the student to be deleted
 *                    schema:
 *                        type: string
 *              responses:
 *                  200:
 *                      description: Successfully deleted the student record.
 */

/**
 * @swagger
 * /patchstd/{student_id}:
 *          patch:
 *              summary: Update a student name
 *              description: Update a student record in the database using the student ID.
 *              tags: ["student"]
 *              parameters:
 *                  - in: path
 *                    name: student_id
 *                    required: true
 *                    description: The ID of the student to be updated
 *                    schema:
 *                        type: string
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/student'
 *              responses:
 *                  200:
 *                      description: Successfully updated the student record.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/student'
 */

/**
 * @swagger
 * /patchstdpassword/{student_id}:
 *          patch:
 *              summary: Update a student password
 *              description: Update a student record in the database using the student ID.
 *              tags: ["student"]
 *              parameters:
 *                  - in: path
 *                    name: student_id
 *                    required: true
 *                    description: The ID of the student to be updated
 *                    schema:
 *                        type: string
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/student'
 *              responses:
 *                  200:
 *                      description: Successfully updated the student record.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/student'
 */
