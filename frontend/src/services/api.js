import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchWorkouts = () => API.get('/workouts');
export const createWorkout = (data) => API.post('/workouts', data);