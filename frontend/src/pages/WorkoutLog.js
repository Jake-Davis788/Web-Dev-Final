import React, { useState, useEffect } from 'react';
import { fetchWorkouts } from '../services/api';

function WorkoutLog() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetchWorkouts()
      .then((res) => setWorkouts(res.data))
      .catch((err) => console.error('Error fetching workouts:', err));
  }, []);

  return (
    <div>
      <h2>Your Workout Log</h2>
      {workouts.length === 0 ? (
        <p>No workouts found.</p>
      ) : (
        <ul>
          {workouts.map((workout) => (
            <li key={workout._id}>
              <strong>{workout.name}</strong> on {new Date(workout.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WorkoutLog;