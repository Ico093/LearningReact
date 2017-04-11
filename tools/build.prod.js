// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file.
/* eslint-disable no-console */
var webpack = require('webpack');
var config = require('../webpack.config.prod');
var consoleColourConstants = require('./constants/consoleColourConstants');

process.env.NODE_ENV = 'production'; // this assures React is built in prod mode and that the Babel dev config doesn't apply.

console.log(consoleColourConstants.processingColour('Generating minified bundle. This will take a moment...'));

webpack(config).run((error, stats) => {
    if (error) { // so a fatal error occurred. Stop here.
        console.log(consoleColourConstants.errorColour(error));
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(consoleColourConstants.errorColour(error)));
    }

    if (jsonStats.hasWarnings) {
        console.log(consoleColourConstants.warningColour('Webpack generated the following warnings: '));
        jsonStats.warnings.map(warning => console.log(consoleColourConstants.warningColour(warning)));
    }

    console.log(`Webpack stats: ${stats}`);

    // if we got this far, the build succeeded.
    console.log(consoleColourConstants.successColour('Your app is compiled in production mode in /dist. It\'s ready to roll!'));

    return 0;
});