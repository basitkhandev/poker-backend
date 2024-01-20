/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *         - role
 *       properties:
 *         id:
 *           type: integer
 *           description: The user ID.
 *         username:
 *           type: string
 *           description: The username.
 *         email:
 *           type: string
 *           description: The email address.
 *         password:
 *           type: string
 *           description: The password.
 *         role:
 *           type: string
 *           description: The user role.
 *   securitySchemes:
 *     JWT:
 *       type: apiKey
 *       in: header
 *       name: Authorization
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Authenticate user and return a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: A JWT token.
 *       401:
 *         description: Unauthorized.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       400:
 *         description: Bad Request - Validation errors.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/users/forgot-password:
 *   post:
 *     summary: Request a password reset.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password reset request successful. An email will be sent with instructions.
 *       400:
 *         description: Bad Request - Validation errors or user not found.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Tutor:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     TutorInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *       required:
 *         - name
 *         - title
 *         - description
 */

/**
 * @swagger
 * /api/tutors:
 *   get:
 *     summary: Get all tutors.
 *     responses:
 *       200:
 *         description: A list of tutors.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tutor'
 */

/**
 * @swagger
 * /api/tutors/{id}:
 *   get:
 *     summary: Get a tutor by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The tutor object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutor'
 *       404:
 *         description: Tutor not found.
 */

/**
 * @swagger
 * /api/tutors:
 *   post:
 *     summary: Create a new tutor.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TutorInput'
 *     responses:
 *       201:
 *         description: Tutor created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutor'
 */

/**
 * @swagger
 * /api/tutors/{id}:
 *   put:
 *     summary: Update a tutor by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TutorInput'
 *     responses:
 *       200:
 *         description: Tutor updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutor'
 *       404:
 *         description: Tutor not found.
 */

/**
 * @swagger
 * /api/tutors/{id}:
 *   delete:
 *     summary: Delete a tutor by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Tutor deleted successfully.
 *       404:
 *         description: Tutor not found.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     TutorExpertise:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The tutor expertise ID.
 *         tutorId:
 *           type: integer
 *           description: The ID of the associated tutor.
 *         tags:
 *           type: string
 *           description: Tags for tutor expertise.
 *         games:
 *           type: string
 *           description: Games for tutor expertise.
 *         gameTypes:
 *           type: string
 *           description: Game types for tutor expertise.
 *         stakes:
 *           type: string
 *           description: Stakes for tutor expertise.
 *         additionalSS:
 *           type: string
 *           description: Additional saved image.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp of creation.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp of the last update.
 */

/**
 * @swagger
 * /api/tutor-expertises:
 *   get:
 *     summary: Get all tutor expertises.
 *     responses:
 *       200:
 *         description: A list of tutor expertises.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TutorExpertise'
 */

/**
 * @swagger
 * /api/tutor-expertises/{id}:
 *   get:
 *     summary: Get a tutor expertise by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The tutor expertise object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TutorExpertise'
 *       404:
 *         description: Tutor expertise not found.
 */

/**
 * @swagger
 * /api/tutor-expertises:
 *   post:
 *     summary: Create a new tutor expertise.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TutorExpertise'
 *     responses:
 *       201:
 *         description: The newly created tutor expertise.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TutorExpertise'
 *       400:
 *         description: Bad request. Invalid input.
 */

/**
 * @swagger
 * tags:
 *   name: TutorRating
 *   description: Operations related to Tutor Ratings
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     TutorRating:
 *       type: object
 *       required:
 *         - tutorId
 *         - rating
 *       properties:
 *         tutorId:
 *           type: integer
 *           description: ID of the tutor.
 *         rating:
 *           type: integer
 *           description: Rating given to the tutor (1 to 5).
 */

/**
 * @swagger
 * /api/tutor-ratings:
 *   post:
 *     summary: Create a new TutorRating
 *     tags: [TutorRating]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TutorRating'
 *     responses:
 *       201:
 *         description: TutorRating created successfully
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/tutor-ratings:
 *   get:
 *     summary: Get all TutorRatings
 *     tags: [TutorRating]
 *     responses:
 *       200:
 *         description: A list of TutorRatings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TutorRating'
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/tutor-ratings/{id}:
 *   get:
 *     summary: Get TutorRating by ID
 *     tags: [TutorRating]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the TutorRating
 *     responses:
 *       200:
 *         description: TutorRating found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TutorRating'
 *       404:
 *         description: TutorRating not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/tutor-ratings/{id}:
 *   put:
 *     summary: Update TutorRating by ID
 *     tags: [TutorRating]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the TutorRating
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TutorRating'
 *     responses:
 *       200:
 *         description: TutorRating updated successfully
 *       404:
 *         description: TutorRating not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/tutor-ratings/{id}:
 *   delete:
 *     summary: Delete TutorRating by ID
 *     tags: [TutorRating]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the TutorRating
 *     responses:
 *       200:
 *         description: TutorRating deleted successfully
 *       404:
 *         description: TutorRating not found
 *       500:
 *         description: Internal Server Error
 */