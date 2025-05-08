import React, { useState, useEffect } from 'react';
import { fetchWorkouts, createWorkout } from '../services/api';

function WorkoutLog() {
  const [workouts, setWorkouts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    type: '',
    duration: '',
    intensity: '',
    notes: ''
  });


  useEffect(() => {
    loadWorkouts();
  }, []);


  const loadWorkouts = () => {
    fetchWorkouts()
      .then((res) => setWorkouts(res.data))
      .catch((err) => console.error('Error fetching workouts:', err));
  };


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    createWorkout(form)
      .then(() => {
        setForm({ name: '', type: '', duration: '', intensity: '', notes: '' });
        loadWorkouts();
      })
      .catch((err) => console.error('Error creating workout:', err));
  };


  return (
    <div>
      <h2>Your Workout Log</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Workout Name"
          value={form.name}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Type (e.g. Cardio, Strength)"
          value={form.type}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          value={form.duration}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <select
          name="intensity"
          value={form.intensity}
          onChange={handleChange}
          className="form-control mb-2"
          required
        >
          <option value="">Select Intensity</option>
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="High">High</option>
        </select>
        <textarea
          name="notes"
          placeholder="Additional Notes"
          value={form.notes}
          onChange={handleChange}
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-success">Add Workout</button>
      </form>


      {workouts.length === 0 ? (
        <p>Your collection:</p>
      ) : (
        <ul className="list-group">
          {workouts.map((workout) => (
            <li key={workout._id} className="list-group-item">
              <strong>{workout.name}</strong> ({workout.type}) - {workout.duration} mins<br />
              Intensity: {workout.intensity}<br />
              Notes: {workout.notes || 'N/A'}<br />
              <small>{new Date(workout.date).toLocaleDateString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WorkoutLog;