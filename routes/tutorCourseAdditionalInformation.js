const express = require("express");
const router = express.Router();
const { TutorCourseAdditionalInformation } = require("../models");
router.post("/", async (req, res) => {
  try {
    const additionalInformation = await TutorCourseAdditionalInformation.create(
      req.body
    );
    res.status(201).json(additionalInformation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Add other CRUD routes (GET, PUT, DELETE) as needed

module.exports = router;
