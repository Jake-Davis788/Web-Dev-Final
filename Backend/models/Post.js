const mongoose = require('mongoose');

// Define the schema for the Post model
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create the Post model
const Post = mongoose.model('Post', postSchema);

// Export the Post model to be used elsewhere in the app
module.exports = Post;
