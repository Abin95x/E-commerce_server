import { Category } from "../models/categotyModel.js";

export const addCategory = async (req, res) => {
    try {
        const { categoryName } = req.body
        console.log(categoryName);
        const exist = await Category.findOne({ name: categoryName })
        console.log(exist);
        if (!exist) {
            const category = new Category({
                name: categoryName
            })
            await category.save()
            res.status(200).json({ message: "Category successfully added" });

        } else {
            res.status(409).json({ message: 'Category already exist' })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getCategory = async (req, res) => {
    try {
        const category = await Category.find()
        console.log(category);
        res.status(200).json({ message: "Category", data: category })

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const addSubCategory = async (req, res) => {
    try {
        const { category, subCategory } = req.body
        console.log(category);
        console.log(subCategory);
    } catch (error) {
        console.log(error);
    }
}