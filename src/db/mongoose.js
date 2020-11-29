const mongoose = require('mongoose')

mongoose.connect(process.env.database, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})