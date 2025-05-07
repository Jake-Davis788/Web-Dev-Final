const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  createWorkout,
  getWorkouts,
  updateWorkout,
} = require('../controllers/workoutController');

router.post('/', auth, createWorkout);

router.get('/', auth, getWorkouts);

router.put('/:id', auth, updateWorkout);

module.exports = router;