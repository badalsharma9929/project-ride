const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const router = express.Router();

// In-memory user storage (in production, use a proper database)
const users = new Map();

// Validation middleware
const validateRegistration = [
  body('username')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];

// Register user
router.post('/register', validateRegistration, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;

  if (users.has(username)) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    users.set(username, {
      username,
      password: hashedPassword,
      createdAt: new Date()
    });

    res.status(201).json({
      message: 'User registered successfully',
      username
    });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

module.exports = router;