const express = require("express");
const router = express.Router();
const {
  TutorCourse,
  TutorCourseAdditionalInformation,
  TutorCourseFrequentlyQuestions,
} = require("../models");

router.post("/", async (req, res) => {
  try {
    const tutorCourse = await TutorCourse.create(req.body);
    const additionalInformation = req?.body?.additionalInformation;
    additionalInformation.tutorCourseId = tutorCourse?.id;
    const tutorInformation = await TutorCourseAdditionalInformation.create(
      additionalInformation
    );
    let frequentlyQuestions = req?.body?.frequentlyQuestions;
    frequentlyQuestions = frequentlyQuestions.map((fQ) => {
      fQ.tutorCourseId = tutorCourse?.id;
      return fQ;
    });
    const frequentlyQ = frequentlyQuestions.map(async (f) => {
      return TutorCourseFrequentlyQuestions.create(f);
    });
    await Promise.allSettled(frequentlyQ);
    res.status(201).json(tutorCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Add other CRUD routes (GET, PUT, DELETE) as needed

module.exports = router;
