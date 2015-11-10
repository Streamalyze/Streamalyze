var express = require('express');
var twitch = require('./miner.js')
var app = express();

twitch.init();

app.engine('.html', require('ejs').__express);
app.set('views', __dirname);
app.set('view engine', 'html');


var fixtureData = require('./data.json');
app.locals.barChartHelper = require('./bar_chart_helper');


app.get('/', function(req, res) {
  res.render('index', { fixtureData: fixtureData });
});


app.listen(3000);
console.log('listening on port 3000');
