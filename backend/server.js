const express = require('express')
const conversion_api = require('./routes/conversion_api')
const createServer = require('./create_server')
const port = 3000


const app = createServer(process.env.NODE_ENV)
//Expose at port 3000
app.listen(port, () => {
    console.log(`DavisAPIClient Listening at http://localhost:${port}`)
})
