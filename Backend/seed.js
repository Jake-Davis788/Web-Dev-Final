require('dotenv').config();
const connectDB = require('../config/db');
const User = require('../models/User');
const Workout = require('../models/Workout');
const Post = require('../models/Post');

const seed = async () => {
    try {
        await connectDB();

        // Clear existing data
        await Promise.all([User.deleteMany(), Workout.deleteMany(), Post.deleteMany()]);

        // Create sample users
        const users = await User.insertMany([
            {
                username: 'alice',
                email: 'alice@example.com',
                password: 'password123',
                bio: 'Runner and foodie',
            },
            {
                username: 'bob',
                email: 'bob@example.com',
                password: 'password123',
                bio: 'Powerlifter extraordinaire',
            },
        ]);

        // Create sample workouts
        await Workout.insertMany([
            {
                user: users[0]._id,
                muscleGroup: 'Legs',
                duration: 45,
                intensity: 'High',
                weightUsed: 'Squat 200 lbs',
                notes: 'Felt strong today!',
            },
            {
                user: users[1]._id,
                muscleGroup: 'Chest',
                duration: 30,
                intensity: 'Medium',
                weightUsed: 'Bench 225 lbs',
                notes: 'Solid pump',
            },
        ]);

        // Create sample posts
        await Post.insertMany([
            {
                user: users[0]._id,
                contentType: 'workout',
                title: 'Leg Day Grind',
                body: 'Just smashed leg day with 200 lbs squats!',
            },
            {
                user: users[1]._id,
                contentType: 'recipe',
                title: 'Protein Pancakes',
                body: 'Shared my favorite protein pancake recipe.',
            },
        ]);

        console.log('Database successfully seeded 🌱');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seed();
