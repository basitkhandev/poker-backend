const express = require("express");
const router = express.Router();
const { Chat } = require("../models");
const { User } = require("../models");
const authenticateJWT = require("../middleware/middleware");
const jwt = require("jsonwebtoken");

/**
 * @swagger
 * tags:
 *   name: Chat
 *   description: CRUD operations for chat
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Chat:
 *       type: object
 *       properties:
 *         senderId:
 *           type: integer
 *         receiverId:
 *           type: integer
 */

/**
 * @swagger
 * /api/chats:
 *   post:
 *     summary: Create a new chat.
 *     tags: [Chat]
 *     security:
 *      - JWT: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Chat'
 *     responses:
 *       201:
 *         description: Successfully created a new chat.
 *         content:
 *           application/json:
 *             example:
 *               senderId: 1
 *               receiverId: 2
 */
router.post("/", authenticateJWT, async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .json({ message: "Failed to authenticate token" });
      }

      req.user = decoded;
    });
    const alreadyChat = await Chat.findOne({
      where: {
        senderId,
        receiverId,
      },
    });
    if (alreadyChat) {
      res.status(201).json(alreadyChat);
    } else {
      const chat = await Chat.create(req.body);
      res.status(201).json(chat);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/chats/{id}:
 *   get:
 *     summary: Get a chat by ID.
 *     tags: [Chat]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The chat object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chat'
 *       404:
 *         description: Chat not found.
 */
router.get("/:id", async (req, res) => {
  try {
    const chat = await Chat.findByPk(req.params.id);
    if (!chat) {
      res.status(404).json({ error: "Chat not found" });
      return;
    }
    res.json(chat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /api/chats:
 *   get:
 *     summary: Get chats.
 *     tags: [Chat]
 *     security:
 *       - JWT: []
 *     responses:
 *       200:
 *         description: The chats Array.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chat'
 *       404:
 *         description: Chats not found.
 */
router.get("/", authenticateJWT, async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .json({ message: "Failed to authenticate token" });
      }

      req.user = decoded;
    });
    const chats = await Chat.findAll({
      include: [
        { model: User, as: "sender" },
        { model: User, as: "receiver" },
      ],
      where: {
        "$sender.id$": req?.user?.id,
      },
    });

    res.json(chats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add routes for other CRUD operations (update, delete) as needed

module.exports = router;
