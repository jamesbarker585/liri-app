# Week 10 homework assignment:
## LIRI Node App


### Introduction

* I created a node.js app called LIRI. LIRI is like SIRI (from an iphone).
* It must be ran in the command line.
* LIRI is a Language Interpretation and Recognition Interface.
* LIRI will be a command line node app that takes in parameters and gives you back data.
* LIRI will do any of the below command when you enter them into the command line.
	2. spotify-this-song
	3. movie-this

* Type in node liri.js to get the instructions on how to enter the commands correctly.

* Example for spotify
![ScreenShot](img/spotify.jpg "Spotify")
```
node liri.js spotify-this-song '<song name here>'
```
* shows the following information about the song in the terminal
	1. artist(s)
	2. song name
	3. preview link of the song from spotify
	4. album that the song is a part of

* Example for movie
![ScreenShot](img/OMDB.jpg "OMDB")
```
node liri.js movie-this '<movie name here>'
```
* this would output the following information to the terminal:
	1. Title
	2. Year
	3. IMDB Rating
	4. Country
	5. Language
	6. Plot
	7. Actors
	8. Rotten Tomatoes Rating
	9. Rotten Tomatoes URL

* These are the npm packages I used and are needed to run the app
	1. fs package in node
	3. [spotify](https://www.npmjs.com/package/spotify)
	4. [request](https://www.npmjs.com/package/request)
	5. [Moment](https://www.npmjs.com/package/moment)
	6. [DotEnv](https://www.npmjs.com/package/dotenv)

* to install these npm packages run these commands one at a time.
npm install spotify
npm install request
```
Note: I was not able to get an API key from Bands in Town after two attempts.
