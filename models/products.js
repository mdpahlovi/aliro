import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    model: { type: String, required: true },
    image: { type: String, required: true },
    status: { type: Boolean, required: true },
    brand: { type: String, required: true },
    keyFeature: { type: Array, required: true },
    price: { type: Number },
    rating: { type: Number },
    spec: { type: Array },
});

export const Product = mongoose.models.product || mongoose.model("product", productSchema);
