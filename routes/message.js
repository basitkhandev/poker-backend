const express = require("express");
const router = express.Router();
const { Message, Chat, User } = require("../models");

// Get all messages
router.get("/", async (req, res) => {
  try {
    const messages = await Message.findAll({
      include: [
        {
          model: Chat,
          include: [
            { model: User, as: "sender" },
            { model: User, as: "receiver" },
          ],
        },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get by chat id
router.get("/chat-id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const messages = await Message.findAll({
      include: [
        {
          model: Chat,
          include: [
            { model: User, as: "sender" },
            { model: User, as: "receiver" },
          ],
        },
      ],
      where: {
        "$Chat.id$": id, // Use the alias 'Chat' for the model
      },
    });
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a message by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const message = await Message.findByPk(id);
    if (message) {
      res.status(200).json(message);
    } else {
      res.status(404).json({ error: "Message not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a new message
router.post("/", async (req, res) => {
  const { chatId, content } = req.body;
  try {
    const newMessage = await Message.create({ chatId, content });
    res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Bad request. Invalid input." });
  }
});

// Update a message by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { chatId, content } = req.body;
  try {
    const message = await Message.findByPk(id);
    if (message) {
      message.chatId = chatId;
      message.content = content;
      await message.save();
      res.status(200).json(message);
    } else {
      res.status(404).json({ error: "Message not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a message by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const message = await Message.findByPk(id);
    if (message) {
      await message.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Message not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
