'use strict'
const compression = require('compression')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const path = require('path')
const {log} = require('./utils')

const PORT = process.env.PORT || 3000
const ENV = process.env.NODE_ENV

const publicFolder = path.join(__dirname, '../public')
const index = path.join(publicFolder, '/index.html')

/**
 * Middleware for compression, security, logging, and serving static content
 */
const app = express()

app.disable('x-powered-by')
app.use(helmet())
app.use(morgan('tiny'))
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
})

/**
 * @todo Add headers
 */

/**
 * Listen for requests
 */
app.listen(PORT, () => {
    log.notify(`Express is listening on port ${PORT} in ${ENV} mode.`)
})
