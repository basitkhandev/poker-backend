const { Message, Chat, User } = require("../models");

const socketConfig = (server) => {
  const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
      origin: "http://localhost:3000",
      // credentials: true,
    },
  });
  io.on("connection", (socket) => {
    console.log("Connected to socket.io");
    socket.on("setup", (userData) => {
      console.log(userData);
      socket.join(userData._id);
      socket.emit("connected");
    });

    socket.on("join chat", async (room) => {
      const alreadyChat = await Chat.findOne({
        where: {
          senderId: room.senderId,
          receiverId: room.receiverId,
        },
      });
      if (alreadyChat) {
        socket.emit("returnChat", alreadyChat);
      } else {
        const chat = await Chat.create(req.body);
        socket.emit("returnChat", chat);
      }
    });

    socket.on("new message", async (newMessageRecieved) => {
      const { chatId, content } = JSON.parse(newMessageRecieved);
      try {
        const newMessage = await Message.create({ chatId, content });
        socket.emit("returnNewMessage", newMessage);
      } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Bad request. Invalid input." });
      }
    });

    socket.on("get messages", async (room) => {
      try {
        console.log(room);
        const { id } = JSON.parse(room);
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
        socket.emit("returnMessages", messages);
      } catch (error) {
        console.error(error);
        return { error: "Internal Server Error" };
      }
    });

    socket.off("setup", () => {
      console.log("USER DISCONNECTED");
      socket.leave(userData._id);
    });
  });
};

module.exports = socketConfig;
