import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from "../controllers/tourController.js"; // Ensure the import is correct

const router = express.Router();

// Create new tour
router.post("/", createTour);
router.put("/:id", updateTour);
router.delete("/:id", deleteTour);
router.get("/:id", getSingleTour);
router.get("/", getAllTour);
//get tour by search 
router.get("/serach/getTourBySearch",getTourBySearch);
router.get("/serach/getFeaturedTours", getFeaturedTour);
router.get("/serach/getTourCount", getTourCount);






export default router;
