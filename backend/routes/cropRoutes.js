import express from "express";
import {
  getAllCrops,
  getCropById,
  addCrop,
  updateCrop,
  deleteCrop,
  searchCrop,
} from "../controllers/cropController.js";

const router = express.Router();

// Search (keep this before /:id)
router.get("/search", searchCrop);

// CRUD Routes
router.get("/", getAllCrops);
router.get("/:id", getCropById);
router.post("/", addCrop);
router.put("/:id", updateCrop);
router.delete("/:id", deleteCrop);

export default router;