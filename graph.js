var d3require('d3');
var BASE_URL = 'https://api.twitch.tv/kraken';
var API_VERSION = 'v3';
var CLIENT_ID = '4ng71gqx25e27yig6whdsbkgx3q2my8';
var DELAY = 10;

data = [1,4,7,10,26,15,5,8,11];

d3.select(".chart")
	.selectAll("div")
		.data(data)
	.enter().append("div")
		.style("width", function(d) { return d * 10 + "px";})
		.text(function(d) {return d;});