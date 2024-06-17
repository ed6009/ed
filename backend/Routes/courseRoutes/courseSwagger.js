/**
 * @swagger
 * components:
 *      schemas:
 *          course:
 *              type: object
 *              properties:
 *                  course_id:
 *                      type: string
 *                      description: The unique identifier for a course
 *                  course_name:
 *                      type: string
 *                      description: The name of the course
 *                  course_description:
 *                      type: string
 *                      description: The description of the course
 *                  fees:
 *                      type: number
 *                      description: Total fees for the course
 *                  syllabus:
 *                      type: string
 *                      description: The syllabus for a teacher
 */

/**
 * @swagger
 * /getcourse:
 *          get:
 *              summary: Retrieve all course records
 *              description: Retrieve a list of all course records from the database.
 *              tags: ["course"]
 *              responses:
 *                  200:
 *                      description: Successfully retrieved the list of course records.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/course'
 */

/**
 * @swagger
 * /postcourse:
 *          post:
 *              summary: Add a new course record
 *              description: Add a new course record to the database.
 *              tags: ["course"]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/course'
 *              responses:
 *                  200:
 *                      description: Successfully added the new course record.
 */

/**
 * @swagger
 * /deletecourse/{course_id}:
 *          delete:
 *              summary: Delete a course record
 *              description: Delete a course record from the database using the course ID.
 *              tags: ["course"]
 *              parameters:
 *                  - in: path
 *                    name: course_id
 *                    required: true
 *                    description: The ID of the course to be deleted
 *                    schema:
 *                        type: string
 *              responses:
 *                  200:
 *                      description: Successfully deleted the course record.
 */

/**
 * @swagger
 * /patchcourse/{course_id}:
 *          patch:
 *              summary: Update a course record
 *              description: Update a course record in the database using the course ID.
 *              tags: ["course"]
 *              parameters:
 *                  - in: path
 *                    name: course_id
 *                    required: true
 *                    description: The ID of the course to be updated
 *                    schema:
 *                        type: string
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/course'
 *              responses:
 *                  200:
 *                      description: Successfully updated the course record.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/course'
 */
