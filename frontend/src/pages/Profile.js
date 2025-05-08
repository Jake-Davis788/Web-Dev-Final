import React, { useState, useEffect } from 'react';
import { fetchWorkouts } from '../services/api';


function Profile() {
  const [user, setUser] = useState({ name: 'Test User', email: 'testuser@example.com' });
  const [workouts, setWorkouts] = useState([]);
  const [stats, setStats] = useState({ total: 0, duration: 0 });


  useEffect(() => {
    fetchWorkouts()
      .then((res) => {
        const data = res.data;
        setWorkouts(data.slice(-5).reverse()); // show last 5
        const totalDuration = data.reduce((sum, w) => sum + Number(w.duration || 0), 0);
        setStats({ total: data.length, duration: totalDuration });
      })
      .catch((err) => console.error('Error fetching workouts:', err));
  }, []);



  return (
    <div>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <hr />
      <h3>Workout Stats</h3>
      <p><strong>Total Workouts:</strong> {stats.total}</p>
      <p><strong>Total Duration:</strong> {stats.duration} minutes</p>

      <h3 className="mt-4">Recent Workouts</h3>
      <ul className="list-group">
        {workouts.map((w) => (
          <li key={w._id} className="list-group-item">
            <strong>{w.name}</strong> – {w.duration} mins on {new Date(w.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Profile;
