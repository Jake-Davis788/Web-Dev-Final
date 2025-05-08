const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  createPost,
  getPosts,
  deletePost,
} = require('../controllers/postController');

// Routes for posts
router.post('/', auth, createPost);
router.get('/', getPosts);
router.delete('/:id', auth, deletePost);

module.exports = router; 