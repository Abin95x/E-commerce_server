

import express from 'express'
const productRoute = express()
import sanitizeInput from '../middlewares/sanitization.js'
import { auth } from '../middlewares/auth.js'
import {
    addProduct,
    getProducts,
    getDetails,
    editDetails
} from '../controllers/productController.js'

productRoute.post('/add-product', auth, addProduct)
productRoute.get('/get-products', auth, getProducts)
productRoute.get('/get-details', auth, getDetails)
productRoute.post('/edit-details',auth, editDetails)





export default productRoute