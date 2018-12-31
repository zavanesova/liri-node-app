var env = require("dotenv").config();
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");

var input = process.argv[2];
var info = process.argv.slice(3).join(" ");

var music = function() {
    var URL = "https://rest.bandsintown.com/artists/" + info + "/events?app_id=codingbootcamp";

    axios.get(URL).then(function(response) {
        for(var i=0; i < 5; i++){
            var res = response.data[i];
            var time = moment(res.datetime).format("MM/DD/YY");
            console.log(res.venue.name + '\n' + res.venue.city + '\n' + time + '\n---------------------');

        }
    })
}

var movie = function() {
    var URL = "http://www.omdbapi.com/?t=" + info + "&y=&plot=short&apikey=trilogy";
    axios.get(URL).then(function(response) {
        var data = response.data
        console.log('Title: ' + data.Title + '\nRelease Date: ' + data.Released + '\nIMDB Rating: ' + data.imdbRating + 
        '\nRotten Tomatoes: ' + data.Ratings[1].Value + '\nCountry Produced: ' + data.Country + '\nLanguage: ' + data.Language + 
        '\nPlot: ' + data.Plot + '\nActors: ' + data.Actors);
        console.log('\n--------------------------------------------\n');
    })
}

var song = function() {
    spotify.search({ type: 'track', query: info }, function(err, response) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        } else{
            //Code to display top 5 matches instead of just the first one.
            // for (var i=0; i < 5; i++) {
            //     console.log('Artist: ' + response.tracks.items[i].album.artists[0].name + '\nSong Name: ' + response.tracks.items[i].name + '\nLink: ' + 
            //     response.tracks.items[i].album.artists[0].external_urls.spotify);
            //     console.log('/n--------------------------------------------/n');
            // }
            var data = response.tracks.items[0];
            var trackInfo = 'Artist: ' + data.album.artists[0].name + '\nSong Name: ' + data.name + '\nLink: ' + 
            data.album.artists[0].external_urls.spotify + '\nAlbum: ' + data.album.name;
            console.log(trackInfo);
            console.log('------------------------------------------------\n');

        }
    });
}

function runMusicMovie() {
    if(input === "concert-this"){
    music();
}else if(input === "movie-this"){
    if (!info) {
        info = "mr.nobody";
    }
    movie();
}}

function runSong() {
 if(input === "spotify-this-song"){
    if (!info) {
        info = "the sign ace of base";
    }
    song();
    
}}

if(input === "do-what-it-says"){
    fs.readFile('random.txt', 'utf8', function(error, data) {
        if(error) {
            return console.log(error)
        }
        input = data.split(',').slice('0')[0];
        info = data.split(',').slice('0')[1]; 
        runMusicMovie();
        runSong();
    })
}
runMusicMovie();
runSong();
