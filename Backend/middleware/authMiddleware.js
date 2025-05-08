const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path to your User model if necessary

// Middleware to protect routes
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id; // Attach the user id to the request object
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;