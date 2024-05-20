import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js"; // Ensure the correct path and file extension

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB database connected");
  } catch (err) {
    console.error("MongoDB database connection failed:", err.message);
  }
};

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/tours", tourRoute);

// Root route
app.get("/", (req, res) => {
  res.send("API is working");
});

// Start server
app.listen(port, () => {
  connect();
  console.log("Server listening on port", port);
});
