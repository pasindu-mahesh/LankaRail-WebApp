const express = require('express');
const router = express.Router();
const { register } = require('../controllers/authController');

router.post('/signup', register);

module.exports = router;
// server/routes/authRoutes.js