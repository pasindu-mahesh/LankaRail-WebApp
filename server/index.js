const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

const app = express();

// Enable CORS for all origins (or restrict as needed)
app.use(cors({
  origin: "http://localhost:3000", // allow frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Enable JSON body parsing
app.use(express.json());



// Connect MongoDB
connectDB();

// API routes
app.use("/api/auth", require("./routes/authRoutes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
