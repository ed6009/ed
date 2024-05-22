/**
 * @swagger
 * components:
 *      schemas:
 *          enrollment:
 *              type: object
 *              properties:
 *                  enrollment_id:
 *                      type: string
 *                      description: The unique identifier for a enrollment
 *                  student_id:
 *                      type: string
 *                      description: The unique identifier for a student
 *                  course_id:
 *                      type: string
 *                      description: The unique identifier for a course
 *                  enrollment_date:
 *                      type: date
 *                      description: The date of the enrollment
 */

/**
 * @swagger
 * /getenrol:
 *          get:
 *              summary: Retrieve all enrollment records
 *              description: Retrieve a list of all enrollment records from the database.
 *              tags: ["enrollment"]
 *              responses:
 *                  200:
 *                      description: Successfully retrieved the list of enrollment records.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/enrollment'
 */

/**
 * @swagger
 * /postenrol:
 *          post:
 *              summary: Add a new enrollment record
 *              description: Add a new enrollment record to the database.
 *              tags: ["enrollment"]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/enrollment'
 *              responses:
 *                  200:
 *                      description: Successfully added the new enrollment record.
 */

/**
 * @swagger
 * /deleteenrol/{enrollment_id}:
 *          delete:
 *              summary: Delete a enrollment record
 *              description: Delete a enrollment record from the database using the enrollment ID.
 *              tags: ["enrollment"]
 *              parameters:
 *                  - in: path
 *                    name: enrollment_id
 *                    required: true
 *                    description: The ID of the enrollment to be deleted
 *                    schema:
 *                        type: string
 *              responses:
 *                  200:
 *                      description: Successfully deleted the enrollment record.
 */

/**
 * @swagger
 * /patchenrolname/{enrollment_id}:
 *          patch:
 *              summary: Update a enrollment record
 *              description: Update a enrollment record in the database using the enrollment ID.
 *              tags: ["enrollment"]
 *              parameters:
 *                  - in: path
 *                    name: enrollment_id
 *                    required: true
 *                    description: The ID of the enrollment to be updated
 *                    schema:
 *                        type: string
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/enrollment'
 *              responses:
 *                  200:
 *                      description: Successfully updated the enrollment record.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/enrollment'
 */
