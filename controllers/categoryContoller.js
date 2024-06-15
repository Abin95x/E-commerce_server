import { Category } from "../models/categotyModel.js";

export const addCategory = async (req, res) => {
    try {
        const { categoryName } = req.body
        if (!categoryName) {
            return res.status(400).json({ message: 'Category required.' });
        }
        const exist = await Category.findOne({ name: categoryName })
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
        res.status(200).json({ message: "Category", data: category })

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const addSubCategory = async (req, res) => {
    try {
        const { category, subCategory } = req.body

        if (!category || !subCategory) {
            return res.status(400)
        }

        const categoryData = await Category.findById(category)

        if (!categoryData) {
            return res.status(404).json({ message: 'Category not found.' });
        }

        if (categoryData.subcategories.includes(subCategory)) {
            return res.status(400).json({ message: 'Sub category already exists in this category.' });
        }

        categoryData.subcategories.push(subCategory)

        await categoryData.save();

        return res.status(200).json({ message: 'Sub category added successfully.' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });

    }
}

export const getOneCategory = async (req, res) => {
    try {
        const { id } = req.query
        const category = await Category.findById(id);
        const subcategories = category.subcategories
        res.status(200).json({ message: 'Sub category.', subcategories: subcategories });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });

    }
}