import express from 'express';
import Ingredient from '../models/ingredient.js';

const router = express.Router();

router.post('/post-data', async (req, res) => {
    try {
        const ingredient = new Ingredient(req.body);
        await ingredient.save();
        res.status(201).json({ message: 'Ingredient created successfully', data: ingredient });
    } catch (error) {
        res.status(400).json({ message: 'Error creating ingredient', error: error.message });
    }
});

router.get('/get-data', async (req, res) => {
    try {
        const ingredients = await Ingredient.find();
        res.status(200).json({ message: 'Ingredients fetched successfully', data: ingredients });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching ingredients', error: error.message });
    }
});

export default router;

