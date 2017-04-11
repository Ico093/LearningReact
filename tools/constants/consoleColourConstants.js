// Centralized configuration for chalk, which is used to add color to console.log statements.
var chalk = require('chalk');

module.exports = {
    errorColour: chalk.red,
    successColour: chalk.green,
    warningColour: chalk.yellow,
    processingColour: chalk.blue
}