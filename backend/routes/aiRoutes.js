import express from "express";
import { getCropAdvice } from "../controllers/aiController.js";

const router = express.Router();

router.post("/", getCropAdvice);

export default router;