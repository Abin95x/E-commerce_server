

import express from 'express'
const productRoute = express()
import sanitizeInput from '../middlewares/sanitization.js'
import { auth } from '../middlewares/auth.js'
import {
    getProducts
} from '../controllers/productController.js'


productRoute.post('/get-products', auth, getProducts)




export default productRoute