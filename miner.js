var mongoose = require('mongoose');
var https = require('https');
var BASE_URL = 'api.twitch.tv';
var BASE_PATH = '/kraken';
var API_VERSION = 'v3';
var CLIENT_ID = '4ng71gqx25e27yig6whdsbkgx3q2my8';
var DELAY = 10;

var headers = {
	'Accept': 'application/vnd.twitchtv.' + API_VERSION + '+json',
	'Client-ID': CLIENT_ID
};

var options = {
	'host': BASE_URL,
	'path': BASE_PATH,
	'method': 'GET',
	'headers': headers
};

callback = function(res) {
	console.log(res.statusCode);
	res.on('data', function(data){
		console.log(data.toString());
	});


};


module.exports = {
	init: function()
	{	
		https.request(options, callback).end();

	}
};
