/**
 * @swagger
 * components:
 *      schemas:
 *          studentprofile:
 *              type: object
 *              properties:
 *                  profile_id:
 *                      type: string
 *                      description: The unique identifier for a profile
 *                  student_id:
 *                      type: string
 *                      description: The unique identifier for a student
 *                  gender:
 *                      type: string
 *                      description: The gender of the student
 *                  email:
 *                      type: string
 *                      description: The email of the student
 *                  student_documentation:
 *                      type: string
 *                      description: The documentation of the student
 *                  address:
 *                      type: string
 *                      description: The address of the student
 *                  city:
 *                      type: string
 *                      description: The city of the student
 *                  state:
 *                      type: string
 *                      description: The state of the student
 *                  nationality:
 *                      type: string
 *                      description: The nationality of the student
 *                  profile_photo:
 *                      type: string
 *                      description: The profile photo of the student
 *                  doj:
 *                      type: string
 *                      description: The date of joining of the student
 *                  dob:
 *                      type: string
 *                      description: The date of birth of the student
 *                  phone_number:
 *                      type: string
 *                      description: The phone number of the student
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
 *                        type: string
 *                  - in: path
 *                    name: student_id
 *                    required: true
 *                    description: The ID of the student to be deleted
 *                    schema:
 *                        type: string
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
 *                        type: string
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
 *                              $ref: '#/components/schemas/studentprofile'
 *              responses:
 *                  200:
 *                      description: Successfully updated the student profile record.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/studentprofile'
 */
