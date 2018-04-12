//Global Variables
var keys = require("./keys")
var Spotify = require("node-spotify-api")
var twitter = require("twitter")
var inquirer = require("inquirer")
var request = require("request")
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
    message: "Whats your favorite song?"
  }]).then(function(answers) {
    spotifyThisSong(answers.name)
  });
};
var myTweets = function() {
  var params = {
    screen_name: 'ReVladimirPutin'
  };
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (error) console.log(error);

    for (var i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text);

    }
    //console.log(tweets);
  }) //spotify: DON'T YOU DARE TOUCH IT BITCH!!!!!!!!
};

var movieThis = function(query) {
  request('http://www.omdbapi.com/?apikey=ec38bfba&t='+query, function(error, response, movieObject) {
    movieObject = JSON.parse(movieObject)
    console.log(movieObject.Title);
    console.log(movieObject.Year);
    console.log(movieObject.Runtime);
    console.log(movieObject.Actors);
    console.log(movieObject.Rated);
  });

}
var myMovies = function() {
  inquirer.prompt([{
    name: "name",
    message: "Choose a movie."
  }]).then(function(answers) {
    movieThis(answers.name)
  });
};


if (process.argv[2] === "spotify-this-song") {
  // spotifyThisSong(process.argv[3]);
  promptSong()

} else if (process.argv[2] === "my-tweets") {
  myTweets()
} else if (process.argv[2] === "movie-this") {
  myMovies()
} else if (process.argv[2] === "do-what-it-says") {
  doWhatItSays()
}
