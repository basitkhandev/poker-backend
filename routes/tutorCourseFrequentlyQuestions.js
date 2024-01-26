const express = require("express");
const router = express.Router();
const { TutorCourseFrequentlyQuestions } = require("../models");

router.post("/", async (req, res) => {
  try {
    const faq = await TutorCourseFrequentlyQuestions.create(req.body);
    res.status(201).json(faq);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Add other CRUD routes (GET, PUT, DELETE) as needed

module.exports = router;
