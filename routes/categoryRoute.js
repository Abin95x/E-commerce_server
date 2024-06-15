import express from 'express'
const categoryRoute = express()
import sanitizeInput from '../middlewares/sanitization.js'
import { auth } from '../middlewares/auth.js'
import {
    addCategory,
    addSubCategory,
    getCategory
} from '../controllers/categoryContoller.js'


categoryRoute.post('/add-category', sanitizeInput, auth, addCategory)
categoryRoute.get('/get-category', auth, getCategory)
categoryRoute.post('/add-subcategory', sanitizeInput, auth, addSubCategory)


export default categoryRoute