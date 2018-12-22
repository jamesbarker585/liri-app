
var fs = require("fs"); 
var request = require("request");
var spotify = require("spotify");
var axios = require("axios");
var liriArgument = process.argv[2];
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
	id: '762684a5689c485b918ef53672f77165',
	secret: 'b5d51db95ca44bf59fa61119e3fdd6a2'
});
var request = require('request');

switch (liriArgument) {
	case "spotify-this-song": spotifyThisSong(); break;
	case "movie-this": movieThis(); break;
	case "do-what-it-says": doWhatItSays(); break;
	default: console.log("\r\n" + "Try typing one of the following commands after 'node liri.js' : " + "\r\n" +
		"1. spotify-this-song 'any song name' " + "\r\n" +
		"2. movie-this 'any movie name' " + "\r\n" +
		"Be sure to put the movie or song name in quotation marks if it's more than one word.");
};
function movieThis() {
	var movie = process.argv[3];
	if (!movie) {
		movie = "mr nobody";
	}
	params = movie
	request("http://www.omdbapi.com/?t="+movie+"&y=&plot=short&apikey=bb567df8", function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var movieObject = JSON.parse(body);
			var movieResults =
				"------------------------------ begin ------------------------------" + "\r\n" +
			"Title: " + movieObject.Title + "\r\n" +
				"Year: " + movieObject.Year + "\r\n" +
				"Imdb Rating: " + movieObject.imdbRating + "\r\n" +
				"Country: " + movieObject.Country + "\r\n" +
				"Language: " + movieObject.Language + "\r\n" +
				"Plot: " + movieObject.Plot + "\r\n" +
				"Actors: " + movieObject.Actors + "\r\n" +
				"Rotten Tomatoes Rating: " + movieObject.tomatoRating + "\r\n" +
				"Rotten Tomatoes URL: " + movieObject.tomatoURL + "\r\n" +
				"------------------------------ fin ------------------------------" + "\r\n";
			console.log(movieResults);
			log(movieResults);
		} else {
			console.log("Error :" + error);
			return;
		}
	});
};
function spotifyThisSong(songName) {
	var songName = process.argv[3];
	if (!songName) {
		songName = "What's my age again";
	}
	params = songName;
	spotify.search({ type: "track", query: params }, function (error, data) {
		if (!error) {
			var songInfo = data.tracks.items;
			for (var i = 0; i < 5; i++) {
				if (songInfo[i] != undefined) {
					var spotifyResults =
						"Artist: " + songInfo[i].artists[0].name + "\r\n" +
						"Song: " + songInfo[i].name + "\r\n" +
						"Album the song is from: " + songInfo[i].album.name + "\r\n" +
						"Preview Url: " + songInfo[i].preview_url + "\r\n" +
						"------------------------------ " + i + " ------------------------------" + "\r\n";
					console.log(spotifyResults);
					log(spotifyResults); 
				}
			}
		} else {
			console.log("Error :" + error);
			return;
		}
	});
};
function doWhatItSays() {
	fs.readFile("random.txt", "utf8", function (error, data) {
		if (!error) {
			doWhatItSaysResults = data.split(",");
			spotifyThisSong(doWhatItSaysResults[0], doWhatItSaysResults[1]);
		} else {
			console.log("Error occurred" + error);
		}
	});
};
function log(logResults) {
	fs.appendFile("log.txt", logResults, (error) => {
		if (error) {
			throw error;
		}
	});
}

