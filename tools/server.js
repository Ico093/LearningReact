var path = require('path');
var webpack = require('webpack');
var express = require('express');
var open = require('open');

var config = require('../webpack.config.dev');

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
    console.error(err);
  } else {
    open("http://localhost:" + port);
  }
});
