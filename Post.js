const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
    },
    { _id: false }
);

const postSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        contentType: { type: String, enum: ['recipe', 'workout'], required: true },
        title: { type: String },
        body: { type: String, required: true },
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        comments: [commentSchema],
    },
    { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
