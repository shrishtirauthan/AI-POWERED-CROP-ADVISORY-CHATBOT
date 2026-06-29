import express from "express";
import cors from "cors";
import cropRoutes from "./routes/cropRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "AI Crop Advisory Backend is Running"
    });
});

// Crop Routes
app.use("/api/crops", cropRoutes);

// Error Handling Middleware
app.use(errorHandler);

export default app;