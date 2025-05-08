const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/workouts', require('./routes/workouts'));
app.use('/api/posts', require('./routes/posts'));

app.post('/api/workouts', async (req, res) => {
    try {
      const { name, type, duration, intensity, notes } = req.body;
      const newWorkout = new Workout({ name, type, duration, intensity, notes, date: new Date() });
      await newWorkout.save();
      res.status(201).json(newWorkout);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error saving workout' });
    }
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));