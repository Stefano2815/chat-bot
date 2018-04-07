var keys = require("./keys")
var spotify = require("spotify-web-api-node")
var twitter = require("twitter")

require('dotenv').config()

var spotifyApi = new spotify(keys.spotify);
var twitterApi = new twitter(keys.twitter)

if (process.argv[2] === "spotify-this-song"){
  spotifyThisSong()
}

else if (process.argv[2] === "my-tweets"){
  myTweets()
}

else if (process.argv[2] === "movie-this"){
  myMovies()
}

else if (process.argv[2] === "do-what-it-says"){
  doWhatItSays()
}
  function spotifyThisSong(){
spotifyApi.searchTracks(process.argv[3])
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    console.error(err);
  });
}
