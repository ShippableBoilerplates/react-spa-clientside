/* eslint no-console: off */
'use strict'
const fs = require('fs')
const chalk = require('chalk')

exports.log = {
    error: message => console.log(chalk.red(`Error: ${message}\n`)),
    success: message => console.log(chalk.green(`Success: ${message}\n`)),
    notify: message => console.log(chalk.yellow(`Notification: ${message}\n`))
}

exports.parse = {
    json: (source, encoding) => JSON.parse(fs.readFileSync(source, encoding))
}
