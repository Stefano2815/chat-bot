require('dotenv').config()

var twitter = {
  TWITTER_CONSUMER_KEY:process.env.TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET:process.env.TWITTER_CONSUMER_SECRET,

  TWITTER_ACCESS_TOKEN_KEY:process.env.TWITTER_ACCESS_TOKEN_KEY,

  TWITTER_ACCESS_TOKEN_SECRET:process.env.TWITTER_ACCESS_TOKEN_SECRET,
}

var spotify = {
  SPOTIFY_ID:process.env.SPOTIFY_ID,
  SPOTIFY_SECRET:process.env.SPOTIFY_SECRET,

}

module.exports = {
  twitter, spotify, omdb

}

var omdb = process.env.OMDB_KEY
