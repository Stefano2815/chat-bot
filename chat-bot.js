var keys = require("./keys")
var Spotify = require("node-spotify-api")
var twitter = require("twitter")
var inquirer = require("inquirer")
require('dotenv').config()

var spotifyApi = new Spotify({
  id: keys.spotify.SPOTIFY_ID,
  secret: keys.spotify.SPOTIFY_SECRET
});
var client = new twitter({
  consumer_key: keys.twitter.TWITTER_CONSUMER_KEY,
  consumer_secret: keys.twitter.TWITTER_CONSUMER_SECRET,
  access_token_key: keys.twitter.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: keys.twitter.TWITTER_ACCESS_TOKEN_SECRET
})

var spotifyThisSong = function(song) {
  spotifyApi.search({
    type: "track",
    query: song,
    limit: 1
  }, function(error, data) {
    if (error) {
      return console.log(error);

    }
     console.log(data.tracks.items[0].album.artists[0].name);
     console.log(data.tracks.items[0].album.artists[0].external_urls.spotify);
     console.log(data.tracks.items[0].name);

  });


}

var promptSong = function() {
  // if the length of the team array is 8 or higher, no more questions will be asked
  inquirer.prompt([{
    name: "name",
    message: "Whats your favorite song? "
  }]).then(function(answers) {
    spotifyThisSong(answers.name)
  });
};
var myTweets = function(){
  var params = {screen_name: 'ReVladimirPutin'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for (i = 0; i < tweets.length; i++) {
    text += tweets[i] +;
}
    console.log(tweets);
  }
  if (error) console.log(error)
});
}
if (process.argv[2] === "spotify-this-song") {
  // spotifyThisSong(process.argv[3]);
  promptSong()

} else if (process.argv[2] === "my-tweets") {
  console.log("my tweets")
  myTweets()
} else if (process.argv[2] === "movie-this") {
  myMovies()
} else if (process.argv[2] === "do-what-it-says") {
  doWhatItSays()
}
