const express = require("express");
const router = express.Router();
const { TutorRating } = require("../models");

// Create TutorRating
router.post("/", async (req, res) => {
  try {
    const tutorRating = await TutorRating.create(req.body);
    res.status(201).json(tutorRating);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all TutorRatings
router.get("/", async (req, res) => {
  try {
    const tutorRatings = await TutorRating.findAll();
    res.json(tutorRatings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get TutorRating by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tutorRating = await TutorRating.findByPk(id);
    if (!tutorRating) {
      return res.status(404).json({ error: "TutorRating not found" });
    }
    res.json(tutorRating);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update TutorRating by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [updatedRows] = await TutorRating.update(req.body, {
      where: { id },
    });
    if (updatedRows === 0) {
      return res.status(404).json({ error: "TutorRating not found" });
    }
    res.json({ message: "TutorRating updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete TutorRating by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRows = await TutorRating.destroy({
      where: { id },
    });
    if (deletedRows === 0) {
      return res.status(404).json({ error: "TutorRating not found" });
    }
    res.json({ message: "TutorRating deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
