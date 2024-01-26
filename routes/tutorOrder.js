const express = require("express");
const router = express.Router();
const { TutorOrder } = require("../models");

// Create a TutorOrder
router.post("", async (req, res) => {
  try {
    const tutorOrder = await TutorOrder.create(req.body);
    res.status(201).json(tutorOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all TutorOrders
router.get("", async (req, res) => {
  try {
    const tutorOrders = await TutorOrder.findAll();
    res.json(tutorOrders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a TutorOrder by ID
router.get("/:id", async (req, res) => {
  try {
    const tutorOrder = await TutorOrder.findByPk(req.params.id);
    if (!tutorOrder) {
      res.status(404).json({ error: "TutorOrder not found" });
      return;
    }
    res.json(tutorOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a TutorOrder by ID
router.put("/:id", async (req, res) => {
  try {
    const tutorOrder = await TutorOrder.findByPk(req.params.id);
    if (!tutorOrder) {
      res.status(404).json({ error: "TutorOrder not found" });
      return;
    }
    await tutorOrder.update(req.body);
    res.json(tutorOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a TutorOrder by ID
router.delete("/:id", async (req, res) => {
  try {
    const tutorOrder = await TutorOrder.findByPk(req.params.id);
    if (!tutorOrder) {
      res.status(404).json({ error: "TutorOrder not found" });
      return;
    }
    await tutorOrder.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
