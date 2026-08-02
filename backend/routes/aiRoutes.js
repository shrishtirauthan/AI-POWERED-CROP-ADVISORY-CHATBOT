import express from "express";
import { getCropAdvice } from "../controllers/aicontroller.js";
const router = express.Router();

router.post("/", getCropAdvice);

export default router;