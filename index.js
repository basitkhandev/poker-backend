const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const userRoutes = require("./routes/users");
const tutorRoutes = require("./routes/tutor");
const tutorExpertiseRoutes = require("./routes/tutorExpertise");
const tutorRatingRoutes = require("./routes/tutorRating");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tutors", tutorRoutes);
app.use("/api/tutor-expertises", tutorExpertiseRoutes);
app.use("/api/tutor-ratings", tutorRatingRoutes);

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
app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
