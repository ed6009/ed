/**
 * @swagger
 * components:
 *      schemas:
 *          teacherprofile:
 *              type: object
 *              properties:
 *                  profile_id:
 *                      type: string
 *                      description: The unique identifier for a profile
 *                  teacher_id:
 *                      type: string
 *                      description: The unique identifier for a teacher
 *                  gender:
 *                      type: string
 *                      description: The gender of the teacher
 *                  email:
 *                      type: string
 *                      description: The email of the teacher
 *                  teacher_documentation:
 *                      type: string
 *                      description: The documentation of the teacher
 *                  address:
 *                      type: string
 *                      description: The address of the teacher
 *                  city:
 *                      type: string
 *                      description: The city of the teacher
 *                  state:
 *                      type: string
 *                      description: The state of the teacher
 *                  marital_status:
 *                      type: string
 *                      description: The marital status of the teacher
 *                  nationality:
 *                      type: string
 *                      description: The nationality of the teacher
 *                  salary:
 *                      type: number
 *                      description: The salary of the teacher
 *                  profile_photo:
 *                      type: string
 *                      description: The profile photo of the teacher
 *                  doj:
 *                      type: string
 *                      description: The date of joining of the teacher
 *                  dob:
 *                      type: string
 *                      description: The date of birth of the teacher
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
 *                        type: string
 *                  - in: path
 *                    name: teacher_id
 *                    required: true
 *                    description: The ID of the teacher to be deleted
 *                    schema:
 *                        type: string
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
 *                        type: string
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
 *                              $ref: '#/components/schemas/teacherprofile'
 *              responses:
 *                  200:
 *                      description: Successfully updated the teacher profile record.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/teacherprofile'
 */
