const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  muscleGroup: String,
  duration: Number,
  intensity: String,
  weight: Number,
  note: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Workout', workoutSchema);