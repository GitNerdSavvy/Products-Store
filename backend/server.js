import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; // Ensure the path to db.js is correct
import ProductRoutes from './routes/product.route.js';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());

// Product routes
app.use("/", ProductRoutes);

// Start the server
app.listen(PORT, async () => {
  try {
    await connectDB(); // Ensure DB connection is made before starting server
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error("Failed to connect to the database", error);
    process.exit(1); // Exit with failure if DB connection fails
  }
});

