import express from 'express'
const route = express()
import sanitizeInput from '../middlewares/sanitization.js'
// import { auth } from '../middlewares/auth.js'
import { signup, login } from '../controllers/userController.js'

route.post('/signup', sanitizeInput, signup)
route.post('/login', sanitizeInput, login)

export default route