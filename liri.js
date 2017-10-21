var request = require("request");

var movieName = process.argv[2];

// OMDB API request 
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";


console.log(queryUrl);

request(queryUrl, function(error, response, body) {

    if (!error && response.statusCode === 200) {

        var parse = JSON.parse(body, null, 2)

        console.log("Title: " + parse.Title + "\nYear: " + parse.Year + "\nIMDB Rating: " + parse.imdbRating + "\nCountry: " + parse.Country + "\nLanguage: " + parse.Language + "\nPlot: " + parse.Plot + "\nActors: " + parse.Actors);
    }
});