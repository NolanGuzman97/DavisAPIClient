const express = require('express')
const conversion_api = require('./routes/conversion_api')
const helmet = require('helmet')

function createServer(NODE_ENV) {
    let app = express()

    if(NODE_ENV === "DEV"){
        app.use(express.json())
        app.use("/", conversion_api)
        
    } else if(NODE_ENV === "PROD"){
        // Add headers for production
        app.use(function (req, res, next) {

            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET');

            // Pass to next layer of middleware
            next();
        });
        app.use(helmet())
        app.use(express.json())
        app.use("/", conversion_api)
    }
    return app
    
}

module.exports = createServer