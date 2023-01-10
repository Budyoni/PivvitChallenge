import express from 'express'
import { body,validationResult } from 'express-validator'

const router = express()

router.get('/', (req, res) => {
    res.json({
        message:'Hello'
    })
})


export { router as userRouter}