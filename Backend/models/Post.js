const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const reactionSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true, index: true },
    type: {
      type: String,
      enum: ['like', 'love', 'fire', 'celebrate', 'insightful'],
      required: true
    }
  },
  { _id: false, timestamps: true }
);

const commentSchema = new Schema(
  {
    author: { type: Types.ObjectId, ref: 'User', required: true },
    body: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

const postSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    author: { type: Types.ObjectId, ref: 'User', required: true, index: true },
    authorName: { type: String, required: true },
    authorAvatar: { type: String, default: '' },
    reactions: [reactionSchema],
    comments: [commentSchema]
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

postSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

postSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

postSchema.pre('validate', async function (next) {
  if (this.isModified('author') || !this.authorName) {
    try {
      const user = await mongoose
        .model('User')
        .findById(this.author)
        .select('username displayName avatar avatarUrl');
      if (user) {
        this.authorName = user.displayName || user.username || '';
        this.authorAvatar = user.avatarUrl || user.avatar || '';
      }
    } catch (err) {
      return next(err);
    }
  }
  next();
});

postSchema.index({ title: 'text', content: 'text' });

module.exports = mongoose.model('Post', postSchema);
