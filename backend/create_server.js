const express = require('express')
const conversion_api = require('./routes/conversion_api')
const cors = require('cors')

function createServer() {
    let app = express()
    //Using cors to allow cross communication with angular frontend
    app.use(cors())
    app.use(express.json())
    app.use("/", conversion_api)
    
    return app
}

module.exports = createServer