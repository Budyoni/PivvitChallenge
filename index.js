import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { userRouter } from './src/routes/user.js' 
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use('/api/v1/user', userRouter)

dotenv.config()

const db = 'mongodb://localhost:27017/test-task'
mongoose.set('strictQuery', false)

app.listen(process.env.PORT, () => { console.log(`Application started on port ${ process.env.PORT }`) })

mongoose.connect(db).then(() => console.log('connected to db..')).catch((err)=> {
    console.log(err + 'error')
})