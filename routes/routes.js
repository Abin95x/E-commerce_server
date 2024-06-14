import express from 'express'
const route = express()
import sanitizeInput from '../middlewares/sanitization.js'
import { auth } from '../middlewares/auth.js'
import { signup } from '../controllers/controller.js'

route.post('/signup', sanitizeInput, signup)
route.post('/login', sanitizeInput,)

export default route