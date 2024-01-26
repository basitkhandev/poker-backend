const express = require("express");
const router = express.Router();
const { TutorFrequentlyQuestion } = require("../models");

router.post("/", async (req, res) => {
  try {
    const tutorFrequentlyQuestion = await TutorFrequentlyQuestion.create(
      req.body
    );
    res.status(201).json(tutorFrequentlyQuestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const tutorFrequentlyQuestions = await TutorFrequentlyQuestion.findAll();
    res.json(tutorFrequentlyQuestions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tutorFrequentlyQuestion = await TutorFrequentlyQuestion.findByPk(id);
    if (!tutorFrequentlyQuestion) {
      return res
        .status(404)
        .json({ error: "Tutor frequently asked question not found." });
    }
    res.json(tutorFrequentlyQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tutorFrequentlyQuestion = await TutorFrequentlyQuestion.findByPk(id);
    if (!tutorFrequentlyQuestion) {
      return res
        .status(404)
        .json({ error: "Tutor frequently asked question not found." });
    }
    const updatedTutorFrequentlyQuestion = await tutorFrequentlyQuestion.update(
      req.body
    );
    res.json(updatedTutorFrequentlyQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tutorFrequentlyQuestion = await TutorFrequentlyQuestion.findByPk(id);
    if (!tutorFrequentlyQuestion) {
      return res
        .status(404)
        .json({ error: "Tutor frequently asked question not found." });
    }
    await tutorFrequentlyQuestion.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
