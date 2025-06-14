// server/index.js
const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('🚀 LankaRail Backend is Running...');
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
