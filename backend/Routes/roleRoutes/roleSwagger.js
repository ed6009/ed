/**
 * @swagger
 * components:
 *      schemas:
 *          role:
 *              type: object
 *              properties:
 *                  role_id:
 *                      type: string
 *                      description: The unique identifier for a role
 *                  role_name:
 *                      type: string
 *                      description: The name of the role
 */

/**
 * @swagger
 * /getrole:
 *          get:
 *              summary: Retrieve all role records
 *              description: Retrieve a list of all role records from the database.
 *              tags: ["role"]
 *              responses:
 *                  200:
 *                      description: Successfully retrieved the list of role records.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/role'
 */

/**
 * @swagger
 * /postrole:
 *          post:
 *              summary: Add a new role record
 *              description: Add a new role record to the database.
 *              tags: ["role"]
 *              requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/role'
 *              responses:
 *                  200:
 *                      description: Successfully added the new role record.
 */

/**
 * @swagger
 * /deleterole/{role_id}:
 *          delete:
 *              summary: Delete a role record
 *              description: Delete a role record from the database using the role ID.
 *              tags: ["role"]
 *              parameters:
 *                  - in: path
 *                    name: role_id
 *                    required: true
 *                    description: The ID of the role to be deleted
 *                    schema:
 *                        type: string
 *              responses:
 *                  200:
 *                      description: Successfully deleted the role record.
 */

/**
 * @swagger
 * /patchrole/{role_id}:
 *          patch:
 *              summary: Update a role record
 *              description: Update a role record in the database using the role ID.
 *              tags: ["role"]
 *              parameters:
 *                  - in: path
 *                    name: role_id
 *                    required: true
 *                    description: The ID of the role to be updated
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
 *                      description: Successfully updated the role record.
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  $ref: '#/components/schemas/role'
 */
