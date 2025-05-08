const mongoose = require('mongoose');

// schema Post model
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

// create Post model
const Post = mongoose.model('Post', postSchema);

// export
module.exports = Post;
