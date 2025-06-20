// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;
const authRoutes = require("./routes/auth");

// Middlewares
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("EduConnect API is live!");
});

// User routes (can be expanded)
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Message routes
const messageRoutes = require("./routes/messageRoutes");
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
