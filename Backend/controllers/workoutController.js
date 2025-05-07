const Workout = require('../models/Workout');

exports.createWorkout = async (req, res) => {
  try {
    const workout = new Workout({ ...req.body, userId: req.user.id });
    await workout.save();
    res.json(workout);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.user.id });
    res.json(workouts);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(workout);
  } catch (err) {
    res.status(500).send('Server error');
  }
};