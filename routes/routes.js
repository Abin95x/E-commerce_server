import express from 'express'
const route = express()
import sanitizeInput from '../middlewares/sanitization.js'
import { authenticateUser } from '../middlewares/auth.js'
import { signup } from '../controllers/userController.js'

route.post('/signup', sanitizeInput, authenticateUser, signup)

export default route