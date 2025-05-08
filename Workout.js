const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        muscleGroup: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
        },
        intensity: {
            type: String,
            enum: ['Low', 'Medium', 'High'],
        },
        weightUsed: {
            type: String,
        },
        notes: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Workout', workoutSchema);
