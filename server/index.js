const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load .env variables
dotenv.config();

// Create app
const app = express();
app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
connectDB();

// Import and use auth routes
const authRoutes = require('./routes/authRoutes'); //  fix name
app.use('/api/auth', authRoutes); //  your endpoint prefix

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
