import express from "express";
import cors from "cors";
import cropRoutes from "./routes/cropRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "AI Crop Advisory Backend is Running",
  });
});

// Routes
app.use("/api/crops", cropRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

// Error Handling Middleware
app.use(errorHandler);

export default app;