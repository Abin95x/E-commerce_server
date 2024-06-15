import { Product } from "../models/productModel.js";
import cloudinary from '../utils/cloudinary.js'

export const addProduct = async (req, res) => {
    try {
        const { name, brand, partno, category, subcategory, description,images } = req.body;

        const uploadedImages = await Promise.all(images.map(async (img) => {
            
            return await cloudinary.uploader.upload(img, { folder: 'e-commerce' });
        }));
        

        const newProduct = new Product({
            name,
            brand,
            partno,
            category,
            subcategory,
            description,
            images: uploadedImages.map(result => result.secure_url) 
        });

        await newProduct.save();
        res.status(200).json({ message: "Product successfully added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

