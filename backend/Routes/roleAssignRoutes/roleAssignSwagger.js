/**
 * @swagger
 * components:
 *      schemas:
 *          roleassign:
 *              type: object
 *              properties:
 *                  role_id:
 *                      type: string
 *                      description: The unique identifier for a role
 *                  emp_id:
 *                      type: string
 *                      description: The unique identifier for a employee
 */

/**
 * @swagger
 * /getroleassign:
 *          get:
 *              summary: Retrieve all role assign records
 *              description: Retrieve a list of all role assign records from the database.
 *              tags: ["role assign"]
 *              responses:
 *                  200:
 *                      description: Successfully retrieved the list of role assign records.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/roleassign'
 */

/**
 * @swagger
 * /postroleassign:
 *          post:
 *              summary: Add a new role assign record
 *              description: Add a new role assign record to the database.
 *              tags: ["role assign"]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/roleassign'
 *              responses:
 *                  200:
 *                      description: Successfully added the new role record.
 */

/**
 * @swagger
 * /deleteroleassign/{role_id}/{emp_id}:
 *          delete:
 *              summary: Delete a role assign record
 *              description: Delete a role assign record from the database using the role ID.
 *              tags: ["role assign"]
 *              parameters:
 *                  - in: path
 *                    name: role_id
 *                    required: true
 *                    description: The ID of the role to be deleted
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
 *                      description: Successfully deleted the role assign record.
 */

/**
 * @swagger
 * /patchroleassign/{role_id}/{emp_id}:
 *          patch:
 *              summary: Update a role assign record
 *              description: Update a role assign record in the database using the role ID.
 *              tags: ["role assign"]
 *              parameters:
 *                  - in: path
 *                    name: role_id
 *                    required: true
 *                    description: The ID of the role to be updated
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
 *                              $ref: '#/components/schemas/role'
 *              responses:
 *                  200:
 *                      description: Successfully updated the role assign record.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/role'
 */
