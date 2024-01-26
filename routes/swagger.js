/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API operations for managing users
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
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
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
 * /api/users/change-password:
 *   post:
 *     summary: Change User Password.
 *     tags: [Users]
 *     security:
 *       - JWT: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password Changed.
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
 *     tags: [Users]
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
 *     tags: [Users]
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
 * /api/users:
 *   get:
 *     summary: Get all users.
 *     tags: [Users]
 *     security:
 *       - JWT: []
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * tags:
 *   name: Tutors
 *   description: API operations for managing tutors
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
 *     tags: [Tutors]
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
 *     tags: [Tutors]
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
 *     tags: [Tutors]
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
 *     tags: [Tutors]
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
 *     tags: [Tutors]
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
 * tags:
 *   name: TutorExpertises
 *   description: API operations for managing tutor expertises
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
 *     tags: [TutorExpertises]
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
 *     tags: [TutorExpertises]
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
 *     tags: [TutorExpertises]
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

/**
 * @swagger
 * tags:
 *   name: TutorCourses
 *   description: CRUD operations for tutor courses
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     TutorCourseAdditionalInformation:
 *       type: object
 *       properties:
 *         gameType:
 *           type: string
 *           description: Type of game associated with the course.
 *         type:
 *           type: string
 *           description: Type of the course.
 *         stakes:
 *           type: string
 *           description: Stakes related to the course.
 *         additionalScreenShots:
 *           type: string
 *           description: Additional saved image for the course.
 *       required:
 *         - gameType
 *         - type
 *         - stakes
 *         - additionalScreenShots
 *
 *     TutorCourseFrequentlyQuestions:
 *       type: object
 *       properties:
 *         question:
 *           type: string
 *           description: The frequently asked question.
 *         answer:
 *           type: string
 *           description: The answer to the question.
 *       required:
 *         - question
 *         - answer
 *
 *     TutorCourse:
 *       type: object
 *       required:
 *         - tutorId
 *         - minimumHours
 *         - maximumHours
 *         - pricePerHour
 *         - description
 *       properties:
 *         tutorId:
 *           type: integer
 *           description: The ID of the tutor.
 *         minimumHours:
 *           type: integer
 *           description: Minimum hours for the course.
 *         maximumHours:
 *           type: integer
 *           description: Maximum hours for the course.
 *         pricePerHour:
 *           type: number
 *           format: float
 *           description: Price per hour for the course.
 *         description:
 *           type: string
 *           description: Course description.
 *         tags:
 *           type: string
 *           description: Tags related to the course.
 *         additionalInformation:
 *           $ref: '#/components/schemas/TutorCourseAdditionalInformation'
 *         frequentlyQuestions:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/TutorCourseFrequentlyQuestions'
 *     required:
 *       - tutorId
 *       - minimumHours
 *       - maximumHours
 *       - pricePerHour
 *       - description
 */

/**
 * @swagger
 * /api/tutor-course:
 *   post:
 *     summary: Create a new tutor course.
 *     tags: [TutorCourses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TutorCourse'
 *     responses:
 *       201:
 *         description: Successfully created a new tutor course.
 *         content:
 *           application/json:
 *             example:
 *               tutorId: 1
 *               minimumHours: 10
 *               maximumHours: 20
 *               pricePerHour: 30.0
 *               description: 'Mathematics Course'
 *               tags: 'math, algebra'
 *               additionalInformation:
 *                 gameType: 'Chess'
 *                 type: 'Strategy'
 *                 stakes: 'Low'
 *                 additionalScreenShots: 'screenshot.jpg'
 *               frequentlyQuestions:
 *                 - question: 'What is the duration of the course?'
 *                   answer: 'The course duration ranges from 10 to 20 hours.'
 *                 - question: 'Is the price negotiable?'
 *                   answer: 'The price is fixed and not negotiable.'
 */
/**
 * @swagger
 * tags:
 *   name: TutorCourseAdditionalInformation
 *   description: CRUD operations for tutor course additional information
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     TutorCourseAdditionalInformation:
 *       type: object
 *       required:
 *         - tutorCourseId
 *       properties:
 *         tutorCourseId:
 *           type: integer
 *           description: The ID of the tutor course.
 *         gameType:
 *           type: string
 *           description: Game type related to the course.
 *         type:
 *           type: string
 *           description: Type of additional information.
 *         stakes:
 *           type: string
 *           description: Stakes related to the course.
 *         additionalScreenShots:
 *           type: string
 *           description: Additional screenshots for the course.
 */

/**
 * @swagger
 * /api/tutor-course-additional-information:
 *   post:
 *     summary: Create additional information for a tutor course.
 *     tags: [TutorCourseAdditionalInformation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TutorCourseAdditionalInformation'
 *     responses:
 *       201:
 *         description: Successfully created additional information for a tutor course.
 *         content:
 *           application/json:
 *             example:
 *               tutorCourseId: 1
 *               gameType: 'Chess'
 *               type: 'Strategy'
 *               stakes: 'Low'
 *               additionalScreenShots: 'screenshot1.jpg'
 */

/**
 * @swagger
 * tags:
 *   name: TutorCourseFrequentlyQuestions
 *   description: CRUD operations for tutor course frequently asked questions
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     TutorCourseFrequentlyQuestions:
 *       type: object
 *       required:
 *         - tutorCourseId
 *         - question
 *         - answer
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the frequently asked question.
 *         tutorCourseId:
 *           type: integer
 *           description: The ID of the tutor course.
 *         question:
 *           type: string
 *           description: The frequently asked question.
 *         answer:
 *           type: string
 *           description: The answer to the question.
 */

/**
 * @swagger
 * /api/tutor-course-frequently-questions:
 *   post:
 *     summary: Create a frequently asked question for a tutor course.
 *     tags: [TutorCourseFrequentlyQuestions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TutorCourseFrequentlyQuestions'
 *     responses:
 *       201:
 *         description: Successfully created a frequently asked question for a tutor course.
 *         content:
 *           application/json:
 *             example:
 *               tutorCourseId: 1
 *               question: 'How much does the course cost?'
 *               answer: 'The course costs $50 per hour.'
 */

/**
 * @swagger
 * tags:
 *   name: TutorOrders
 *   description: CRUD operations for tutor orders
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     TutorOrder:
 *       type: object
 *       required:
 *         - tutorId
 *         - tutorCourseId
 *         - orderTotal
 *         - orderAge
 *         - orderStatus
 *       properties:
 *         tutorId:
 *           type: integer
 *           description: The ID of the tutor.
 *         tutorCourseId:
 *           type: integer
 *           description: The ID of the associated tutor course.
 *         orderTotal:
 *           type: number
 *           format: float
 *           description: The total cost of the order.
 *         orderAge:
 *           type: integer
 *           description: The age of the order.
 *         orderStatus:
 *           type: string
 *           description: The status of the order.
 *       example:
 *         tutorId: 1
 *         tutorCourseId: 2
 *         orderTotal: 50.0
 *         orderAge: 30
 *         orderStatus: 'Pending'
 */

/**
 * @swagger
 * /api/tutor-orders:
 *   post:
 *     summary: Create a new tutor order.
 *     tags: [TutorOrders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TutorOrder'
 *     responses:
 *       201:
 *         description: Successfully created a new tutor order.
 *         content:
 *           application/json:
 *             example:
 *               tutorId: 1
 *               tutorCourseId: 2
 *               orderTotal: 50.0
 *               orderAge: 30
 *               orderStatus: 'Pending'
 *       400:
 *         description: Bad request. Invalid input.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/tutor-orders:
 *   get:
 *     summary: Get all tutor orders.
 *     tags: [TutorOrders]
 *     responses:
 *       200:
 *         description: A list of tutor orders.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TutorOrder'
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/tutor-orders/{id}:
 *   get:
 *     summary: Get a tutor order by ID.
 *     tags: [TutorOrders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The tutor order object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TutorOrder'
 *       404:
 *         description: Tutor order not found.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/tutor-orders/{id}:
 *   put:
 *     summary: Update a tutor order by ID.
 *     tags: [TutorOrders]
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
 *             $ref: '#/components/schemas/TutorOrder'
 *     responses:
 *       200:
 *         description: Tutor order updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TutorOrder'
 *       404:
 *         description: Tutor order not found.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/tutor-orders/{id}:
 *   delete:
 *     summary: Delete a tutor order by ID.
 *     tags: [TutorOrders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Tutor order deleted successfully.
 *       404:
 *         description: Tutor order not found.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * tags:
 *   name: TutorFrequentlyQuestions
 *   description: CRUD operations for tutor frequently asked questions
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     TutorFrequentlyQuestion:
 *       type: object
 *       required:
 *         - tutorId
 *         - question
 *         - answer
 *       properties:
 *         tutorId:
 *           type: integer
 *           description: The ID of the associated tutor.
 *         question:
 *           type: string
 *           description: The frequently asked question.
 *         answer:
 *           type: string
 *           description: The answer to the frequently asked question.
 *       example:
 *         tutorId: 1
 *         question: 'How can I schedule a tutoring session?'
 *         answer: 'You can schedule a session through our online portal.'
 */

/**
 * @swagger
 * /api/tutor-frequently-questions:
 *   post:
 *     summary: Create a new tutor frequently asked question.
 *     tags: [TutorFrequentlyQuestions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TutorFrequentlyQuestion'
 *     responses:
 *       201:
 *         description: Successfully created a new tutor frequently asked question.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TutorFrequentlyQuestion'
 *       400:
 *         description: Bad request. Invalid input.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/tutor-frequently-questions:
 *   get:
 *     summary: Get all tutor frequently asked questions.
 *     tags: [TutorFrequentlyQuestions]
 *     responses:
 *       200:
 *         description: A list of tutor frequently asked questions.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TutorFrequentlyQuestion'
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/tutor-frequently-questions/{id}:
 *   get:
 *     summary: Get a tutor frequently asked question by ID.
 *     tags: [TutorFrequentlyQuestions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The tutor frequently asked question object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TutorFrequentlyQuestion'
 *       404:
 *         description: Tutor frequently asked question not found.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/tutor-frequently-questions/{id}:
 *   put:
 *     summary: Update a tutor frequently asked question by ID.
 *     tags: [TutorFrequentlyQuestions]
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
 *             $ref: '#/components/schemas/TutorFrequentlyQuestion'
 *     responses:
 *       200:
 *         description: Tutor frequently asked question updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TutorFrequentlyQuestion'
 *       404:
 *         description: Tutor frequently asked question not found.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * /api/tutor-frequently-questions/{id}:
 *   delete:
 *     summary: Delete a tutor frequently asked question by ID.
 *     tags: [TutorFrequentlyQuestions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Tutor frequently asked question deleted successfully.
 *       404:
 *         description: Tutor frequently asked question not found.
 *       500:
 *         description: Internal Server Error.
 */

/**
 * @swagger
 * tags:
 *   - name: Chat
 *     description: Operations related to Chat entities
 *
 * definitions:
 *   Chat:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       chatName:
 *         type: string
 *       isGroupChat:
 *         type: boolean
 *       users:
 *         type: array
 *         items:
 *           $ref: '#/definitions/User'
 *       latestMessage:
 *         $ref: '#/definitions/Message'
 *       createdAt:
 *         type: string
 *       updatedAt:
 *         type: string
 */
/**
 /**
 * @swagger
 * /api/chat:
 *   post:
 *     summary: Access Chat
 *     tags: [Chat]
 *     security:
 *       - JWT: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Successful operation
 *         schema:
 *           $ref: '#/definitions/Chat'
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: CRUD operations for messages
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Message:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The message ID.
 *         chatId:
 *           type: integer
 *           description: The ID of the associated chat.
 *         content:
 *           type: string
 *           description: Message content.
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
 * /api/messages:
 *   get:
 *     summary: Get all messages.
 *     tags: [Messages]
 *     responses:
 *       200:
 *         description: A list of messages.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Message'
 */

/**
 * @swagger
 * /api/messages/{id}:
 *   get:
 *     summary: Get a message by ID.
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The message object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       404:
 *         description: Message not found.
 */

/**
 * @swagger
 * /api/messages/chat-id/{id}:
 *   get:
 *     summary: Get a message by chat id.
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The message object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       404:
 *         description: Message not found.
 */

/**
 * @swagger
 * /api/messages:
 *   post:
 *     summary: Create a new message.
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Message'
 *     responses:
 *       201:
 *         description: The newly created message.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       400:
 *         description: Bad request. Invalid input.
 */

/**
 * @swagger
 * /api/messages/{id}:
 *   put:
 *     summary: Update a message by ID.
 *     tags: [Messages]
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
 *             $ref: '#/components/schemas/Message'
 *     responses:
 *       200:
 *         description: Message updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       404:
 *         description: Message not found.
 */

/**
 * @swagger
 * /api/messages/{id}:
 *   delete:
 *     summary: Delete a message by ID.
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Message deleted successfully.
 *       404:
 *         description: Message not found.
 */
