import mongoose from 'mongoose';

const ingredients = new mongoose.Schema({
    id: { type: String, required: true },
    iname: { type: String, required: true }
}, { _id: false });

const toppings = new mongoose.Schema({
    id: { type: String, required: true },
    tname: { type: String, required: true },
    price: { type: String },
}, { _id: false });

const pizzaSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    type: { type: String, enum: ['veg', 'nonveg'] },
    price: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true  },
    description: { type: String },
    ingredients: { type: [ingredients], default: [] },
    topping: { type: [toppings], default: [] }
});

export default mongoose.model('Pizza', pizzaSchema);
