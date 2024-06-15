import express from 'express'
import cors from 'cors'
import userRoute from './routes/userRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import productRoute from './routes/productRoute.js'
import { dbconnect } from './config/dbConfig.js'

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET','POST','PUT','PATCH'],
    credentials: true,
}))

app.use(express.json({ limit: "20mb" }))
app.use(express.urlencoded({limit: "20mb", extended: true}))
app.use('/',userRoute)
app.use('/category',categoryRoute)
app.use('/product',productRoute)

dbconnect()


app.listen(PORT,()=>{
    console.log('running...')
})