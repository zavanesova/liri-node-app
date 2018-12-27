var env = require("dotenv").config();
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");

var music = function() {
    var artist = process.argv.slice(3).join(" ");
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(URL).then(function(response) {
        for(var i=0; i < 5; i++){
            var res = response.data[i];
            var time = moment(res.datetime).format("MM/DD/YY");
            console.log(res.venue.name + '\n' + res.venue.city + '\n' + time + '\n---------------------');

        }
    })
}
var input = process.argv[2];
if(input === "concert-this"){
    music();
}
