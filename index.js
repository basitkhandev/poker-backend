const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const userRoutes = require("./routes/users");
const tutorRoutes = require("./routes/tutor");
const tutorExpertiseRoutes = require("./routes/tutorExpertise");
const tutorRatingRoutes = require("./routes/tutorRating");
const tutorCourseRoutes = require("./routes/tutorCourse");
const tutorOrderRoutes = require("./routes/tutorOrder");
const tutorCourseAdditionalInformationRoutes = require("./routes/tutorCourseAdditionalInformation");
const tutorCourseFrequentlyQuestionRoutes = require("./routes/tutorCourseFrequentlyQuestions");
const tutorFrequentlyQuestionRoutes = require("./routes/tutorFrequentlyQuestions");
const chatRoutes = require("./routes/chat");
const messageRoutes = require("./routes/message");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const pg = require("pg");
require("dotenv").config();
const socketConfig = require("./config/socket");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tutors", tutorRoutes);
app.use("/api/tutor-expertises", tutorExpertiseRoutes);
app.use("/api/tutor-ratings", tutorRatingRoutes);
app.use("/api/tutor-course", tutorCourseRoutes);
app.use("/api/tutor-orders", tutorOrderRoutes);
app.use(
  "/api/tutor-course-additional-information",
  tutorCourseAdditionalInformationRoutes
);
app.use(
  "/api/tutor-course-frequently-questions",
  tutorCourseFrequentlyQuestionRoutes
);
app.use("/api/tutor-frequently-questions", tutorFrequentlyQuestionRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);

// Swagger setup
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Instructor",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start server
const server = app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    // var client = new pg.Client({
    //   user: "postgres",
    //   password: "poker123",
    //   database: "dbPoker",
    //   port: 5432,
    //   host: "poker-2.c9gugqys8aiz.ap-southeast-2.rds.amazonaws.com",
    //   ssl: {
    //     rejectUnauthorized: false,
    //   },
    // });
    // client.connect();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    // Log additional information about Sequelize errors
    if (error.original) {
      console.error("Original Sequelize error:", error.original);
    }
  }
});

socketConfig(server);
