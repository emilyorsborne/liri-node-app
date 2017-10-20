// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

// Grab the movieName which will always be the third node argument.
var movieName = process.argv[2];

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {

        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
        console.log("Release Year: " + JSON.parse(body).Year);
    }
});


//spotify api call
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: 4e933526 cffb4f3e9786297c07efd45a,
    secret: 66 be249643134f89b0c6c27f7a936534
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});