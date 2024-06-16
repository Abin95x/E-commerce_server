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
    price: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        
    },
    subcategory: {
        type: String,
        
    },
    description: {
        type: String
    },
    images: {
        type: [String]

    }  
}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);


