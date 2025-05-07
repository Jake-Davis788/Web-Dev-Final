const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  contentType: { type: String, enum: ['recipe', 'workout'], required: true },
  content: String,
  likes: { type: Number, default: 0 },
  comments: [String],
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);