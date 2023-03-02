import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    model: { type: String },
    image: { type: String },
    status: { type: Boolean },
    brand: { type: String },
    keyFeature: { type: Array },
    price: { type: String },
    rating: { type: String },
    spec: { type: Array },
});

export const Product = mongoose.models.product || mongoose.model("product", productSchema);
