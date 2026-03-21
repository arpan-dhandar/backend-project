import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Load environment variables
dotenv.config();

// Optional: check if env is loaded
console.log("MONGODB_URI:", process.env.MONGODB_URI);

// Connect to database
connectDB();