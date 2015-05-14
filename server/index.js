'use strict';
var express = require('express');
var app = express();
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Q = require('q');

//Mongo
mongoose.connect('mongodb://localhost/hexacdt');
var player;
var team;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	var playerSchema = mongoose.Schema({
        name: String,
        displayName: String,
        isCaptain: Boolean,
        points: Number
	});
	player = mongoose.model('Player', playerSchema);
	
	var teamSchema = mongoose.Schema({
		name: String,
		user: String,
		players: [Player],
		won: Number
	});
	team = mongoose.model('Team', teamSchema);
});

//CORS
app.use(cors());
//API - teams
app.get('/team', function(request, response){
	// get all teams
});
app.get('/team/:teamName', function(request, response){
	// get a team
	var teamName = request.parameters.teamName;

});
app.post('/team/:teamName', function(request, response){
	// create new team
	var teamName = request.parameters.teamName;
});
app.put('/team/:teamName', function(request, response){
	// update a team
	var teamName = request.parameters.teamName;
	// update players points
});
//API - players
app.get('/player', function(request, response){
	// get all players
});
app.get('/player/:playerName', function(request, response){
	// get a player
	var playerName = request.parameters.playerName;

});
app.post('/player/:playerName', function(request, response){
	// create new player
	var playerName = request.parameters.playerName;
});
app.put('/player/:playerName', function(request, response){
	// update a player
	var playerName = request.parameters.playerName;
	// update player points
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	var serverUrl = 'http://' + host + ':' + port;
	console.log('Example app listening at %s', serverUrl);
});
