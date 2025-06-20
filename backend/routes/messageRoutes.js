// backend/routes/messageRoutes.js
const express = require("express");
const router = express.Router();

let messages = [
  { id: 1, sender: "John", text: "Hey there!", to: "Jane" },
  { id: 2, sender: "Jane", text: "Hello!", to: "John" },
];

router.get("/", (req, res) => {
  res.json(messages);
});

router.post("/", (req, res) => {
  const newMessage = req.body;
  newMessage.id = Date.now();
  messages.push(newMessage);
  res.status(201).json(newMessage);
});

module.exports = router;
