import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/pizzeria';

app.use(cors());

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB');

        app.get('/', (req, res) => {
            res.json({ message: 'server is up' });
        });

        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err.message);
        process.exit(1);
    });