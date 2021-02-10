const express = require('express')
const conversion_api = require('./routes/conversion_api')

function createServer() {
    let app = express()
    app.use(express.json())
    app.use("/", conversion_api)
    return app
}

module.exports = createServer