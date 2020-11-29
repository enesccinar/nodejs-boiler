const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
require('./db/mongoose')

const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use(userRouter)

app.listen(port, () => {
    console.log(`server is up on port: ${port}`)
})