import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'
import { donationsRouter } from './src/routes/donations/index.js'
import {  campaignsRouter } from './src/routes/campaings/index.js'
import { authMiddleware } from './src/middlewares/authMiddleware.js'

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.use('/api/v1/donations', authMiddleware, donationsRouter)
app.use('/api/v1/campaigns', authMiddleware, campaignsRouter)
app.use('/donations',(req,res)=>{
     res.sendFile(path.resolve("./src/views/donations.html"))
})

dotenv.config()

const db = 'mongodb://localhost:27017/test-task'
mongoose.set('strictQuery', false)

app.listen(process.env.PORT, () => { console.log(`Application started on port ${ process.env.PORT }`) })

mongoose.connect(db).then(() => console.log('connected to db..')).catch((err)=> {
    console.log(err + 'error')
})