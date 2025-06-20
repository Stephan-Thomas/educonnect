// backend/routes/userRoutes.js
const express = require("express");
const router = express.Router();

// Example data
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", school: "UNN" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", school: "UNILAG" },
];

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// You can add POST/PUT/DELETE later

module.exports = router;
