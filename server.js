import express from 'express'
import cors from 'cors'


const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET','POST','PUT','PATCH'],
    credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.listen(PORT,()=>{
    console.log('running...')
})