const express = require("express");
const router = express.Router();
const {
  Tutor,
  TutorExpertise,
  TutorRating,
  TutorCourse,
  TutorOrder,
  TutorCourseAdditionalInformation,
  TutorCourseFrequentlyQuestions,
  TutorFrequentlyQuestion,
} = require("../models");

router.get("/", async (req, res) => {
  try {
    const tutors = await Tutor.findAll({
      include: [
        {
          model: TutorExpertise,
        },
        {
          model: TutorRating,
        },
        {
          model: TutorCourse,
          include: [
            {
              model: TutorCourseAdditionalInformation,
            },
            {
              model: TutorCourseFrequentlyQuestions,
            },
          ],
        },
        {
          model: TutorOrder,
        },
        {
          model: TutorFrequentlyQuestion,
        },
      ],
    });
    res.json(tutors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const tutor = await Tutor.findByPk(id, {
      include: [
        {
          model: TutorExpertise,
        },
        {
          model: TutorRating,
        },
        {
          model: TutorCourse,
          include: [
            {
              model: TutorCourseAdditionalInformation,
            },
            {
              model: TutorCourseFrequentlyQuestions,
            },
          ],
        },
        {
          model: TutorOrder,
          include: [
            {
              model: TutorCourse,
            },
          ],
        },
        {
          model: TutorFrequentlyQuestion,
        },
      ],
    });

    if (!tutor) {
      return res.status(404).json({ error: "Tutor not found" });
    }

    res.json(tutor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const { name, title, description } = req.body;

  try {
    const newTutor = await Tutor.create({ name, title, description });
    res.status(201).json(newTutor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, title, description } = req.body;

  try {
    const tutor = await Tutor.findByPk(id);

    if (!tutor) {
      return res.status(404).json({ error: "Tutor not found" });
    }

    await tutor.update({ name, title, description });
    res.json(tutor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const tutor = await Tutor.findByPk(id);

    if (!tutor) {
      return res.status(404).json({ error: "Tutor not found" });
    }

    await tutor.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
