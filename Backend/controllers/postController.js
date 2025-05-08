// Correct relative path to the Post model
const Post = require('../models/Post');

// Create a new post
exports.createPost = async (req, res) => {
  try {
    // Create a new post and associate it with the logged-in user
    const post = new Post({ ...req.body, userId: req.user.id });
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Get all posts
exports.getPosts = async (req, res) => {
  try {
    // Fetch posts and populate the userId field with the username
    const posts = await Post.find().populate('userId', 'username');
    res.json(posts);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Delete a post by ID
exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Post deleted' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};