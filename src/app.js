import cors from 'cors';
import express from 'express'
import bodyParser from 'body-parser'
// require('./db/mongoose')

import userRouter from './routers/user'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use(userRouter)

app.listen(port, () => {
    console.log(`server is up on port: ${port}`)
})