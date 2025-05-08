const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware'); // Authentication middleware
const {
  createPost,
  getPosts,
  deletePost,
} = require('../controllers/postController'); // Import controller functions

// Routes for posts
router.post('/', auth, createPost);  // Create a post
router.get('/', getPosts);           // Get all posts
router.delete('/:id', auth, deletePost);  // Delete a post by ID

module.exports = router;  // Export the router