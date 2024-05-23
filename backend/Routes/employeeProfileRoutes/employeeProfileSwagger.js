/**
 * @swagger
 * components:
 *      schemas:
 *          employeeprofile:
 *              type: object
 *              properties:
 *                  profile_id:
 *                      type: string
 *                      description: The unique identifier for a profile
 *                  emp_id:
 *                      type: string
 *                      description: The unique identifier for a employee
 *                  email:
 *                      type: string
 *                      description: The email of the employee
 *                  phone_number:
 *                      type: string
 *                      description: The phone number of the employee
 *                  gender:
 *                      type: string
 *                      description: The gender of the employee
 *                  profile_photo:
 *                      type: string
 *                      description: The profile photo of the employee
 *                  attach_document:
 *                      type: string
 *                      description: The documents of the employee
 *                  address:
 *                      type: string
 *                      description: The address of the employee
 *                  city:
 *                      type: string
 *                      description: The city of the employee
 *                  state:
 *                      type: string
 *                      description: The state of the employee
 *                  salary:
 *                      type: number
 *                      description: The salary of the employee
 *                  nationality:
 *                      type: string
 *                      description: The nationality of the employee
 *                  marital_status:
 *                      type: string
 *                      description: The martial status of the employee
 *                  dob:
 *                      type: date
 *                      description: The joining date of the employee
 */

/**
 * @swagger
 * /getemppro:
 *          get:
 *              summary: Retrieve all employee profile records
 *              description: Retrieve a list of all employee profile records from the database.
 *              tags: ["employee profile"]
 *              responses:
 *                  200:
 *                      description: Successfully retrieved the list of employee profile records.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/employeeprofile'
 */

/**
 * @swagger
 * /postemppro:
 *          post:
 *              summary: Add a new employee profile record
 *              description: Add a new employee profile record to the database.
 *              tags: ["employee profile"]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/employeeprofile'
 *              responses:
 *                  200:
 *                      description: Successfully added the new employee profile record.
 */

/**
 * @swagger
 * /deleteemppro/{profile_id}/{emp_id}:
 *          delete:
 *              summary: Delete a employee profile record
 *              description: Delete a employee profile record from the database using the employee ID.
 *              tags: ["employee profile"]
 *              parameters:
 *                  - in: path
 *                    name: profile_id
 *                    required: true
 *                    description: The ID of the profile to be deleted
 *                    schema:
 *                        type: string
 *                  - in: path
 *                    name: emp_id
 *                    required: true
 *                    description: The ID of the employee to be deleted
 *                    schema:
 *                        type: string
 *              responses:
 *                  200:
 *                      description: Successfully deleted the employee profile record.
 */

/**
 * @swagger
 * /patchemppro/{profile_id}/{emp_id}:
 *          patch:
 *              summary: Update a employee profile record
 *              description: Update a employee profile record in the database using the employee ID.
 *              tags: ["employee profile"]
 *              parameters:
 *                  - in: path
 *                    name: profile_id
 *                    required: true
 *                    description: The ID of the profile to be updated
 *                    schema:
 *                        type: string
 *                  - in: path
 *                    name: emp_id
 *                    required: true
 *                    description: The ID of the employee to be updated
 *                    schema:
 *                        type: string
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/employeeprofile'
 *              responses:
 *                  200:
 *                      description: Successfully updated the employee profile record.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/employeeprofile'
 */
