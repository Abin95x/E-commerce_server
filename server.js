import express from 'express'
import cors from 'cors'
import userRoute from './routes/userRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import { dbconnect } from './config/dbConfig.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET','POST','PUT','PATCH'],
    credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/',userRoute)
app.use('/category',categoryRoute)

dbconnect()

app.listen(PORT,()=>{
    console.log('running...')
})