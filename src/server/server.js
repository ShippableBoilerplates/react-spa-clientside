'use strict'
const compression = require('compression')
const express = require('express')
const helmet = require('helmet')
const path = require('path')
const {log} = require('./utils')

const PORT = process.env.PORT || 3000

const publicFolder = path.join(__dirname, '../../public')
const index = path.join(publicFolder, '/index.html')

/**
 * Middlewares for compression, security and serving static content
 */
const app = express()

app.disable('x-powered-by')
app.use(helmet())
app.use(compression())
app.use(express.static(publicFolder))

/**
 * Catch all routes and send index.html
 */
app.get('*', (req, res) => {
    try {
        res.sendFile(index)
    } catch (e) {
        log.error(e)
    }
    log.notify(`Serving request.`)
})

/**
 * @todo Add unified logging
 * @todo Add headers
 */

/**
 * Listening for requests
 */
app.listen(PORT, () => {
    log.notify(`Express listening on port ${PORT}`)
})
