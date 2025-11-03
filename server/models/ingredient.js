import mongoose from 'mongoose';

const ingredientsSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    price: { type: String, required: true  },
    tname: { type: String, required: true },
    image: { type: String },
});

export default mongoose.model('Ingredient', ingredientsSchema);