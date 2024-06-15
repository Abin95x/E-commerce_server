

import express from 'express'
const productRoute = express()
import sanitizeInput from '../middlewares/sanitization.js'
import { auth } from '../middlewares/auth.js'
import {
    addProduct,
    getProducts
} from '../controllers/productController.js'

productRoute.post('/add-product', auth, addProduct)
productRoute.get('/get-products', auth, getProducts)





export default productRoute