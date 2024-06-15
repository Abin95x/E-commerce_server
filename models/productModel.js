import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    partno: {
        type: String,
        required: true, unique: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    images: {
        type: [String]

    }  
}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);


