import express from 'express';
import Pizza from '../models/pizza.js';

const router = express.Router();

router.post('/post-data', async (req, res) => {
    try {
        const pizza = new Pizza(req.body);
        await pizza.save();
        res.status(201).json({ message: 'Pizza created successfully', data: pizza });
    } catch (error) {
        res.status(400).json({ message: 'Error creating pizza', error: error.message });
    }
});

router.get('/get-data', async (req, res) => {
    try {
        const pizzas = await Pizza.find();
        res.status(200).json({ message: 'Pizzas fetched successfully', data: pizzas });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching pizzas', error: error.message });
    }
});

export default router;

