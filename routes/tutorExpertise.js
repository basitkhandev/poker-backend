const express = require("express");
const router = express.Router();
const { TutorExpertise } = require("../models");

router.post("/", async (req, res) => {
  try {
    const newTutorExpertise = await TutorExpertise.create(req.body);
    res.status(201).json(newTutorExpertise);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const tutorExpertises = await TutorExpertise.findAll();
    res.json(tutorExpertises);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const tutorExpertise = await TutorExpertise.findByPk(id);

    if (!tutorExpertise) {
      return res.status(404).json({ error: "Tutor expertise not found" });
    }

    res.json(tutorExpertise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
