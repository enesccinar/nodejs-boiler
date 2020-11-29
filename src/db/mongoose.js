const mongoose = require('mongoose')
require('../utils/config')

mongoose.connect(global.gConfig.database, {
    useNewUrlParser: true,
    useCreateIndex: true
})