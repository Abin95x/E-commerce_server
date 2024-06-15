import express from 'express'
const userRoute = express()
import sanitizeInput from '../middlewares/sanitization.js'
import { signup, login } from '../controllers/userController.js'

userRoute.post('/signup', sanitizeInput, signup)
userRoute.post('/login', sanitizeInput, login)

export default userRoute