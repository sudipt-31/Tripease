import express from "express";
import { createTour } from "../controllers/tourController.js"; // Ensure the import is correct

const router = express.Router();

// Create new tour
router.post("/", createTour);

export default router;
