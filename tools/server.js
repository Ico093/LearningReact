var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('../webpack.config');

var port = 3001;
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:' + port + '/');
});