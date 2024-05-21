import express from "express";
import { createTour, deleteTour, getAllTour, getSingleTour, updateTour } from "../controllers/tourController.js"; // Ensure the import is correct

const router = express.Router();

// Create new tour
router.post("/", createTour);
router.put("/:id", updateTour);
router.delete("/:id", deleteTour);
router.get("/:id", getSingleTour);
router.get("/", getAllTour);



export default router;
