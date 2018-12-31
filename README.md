# Liri Node App

## Purpose
* This app allows users to retrieve the following information:
  * An artist's next five concerts, including: the venue name, city, and time of the event.
  * Information about a song, including: artist, album, and a Spotify link to the song.
  * Information about a movie, including: release date, ratings, country, language, plot, and actors.

## Technologies Used
* This app was built with:
  * Javascript
  * Node
  * Spotify API
  * Bands In Town API 
  * OMDB API
  * Axios
  * Moment.js
 
## How It Works
* This app takes in four commands:
  * The following command retreives concert information for an artist the user inputs:
   * node liri.js concert-this <artist name here>
   ![ScreenShot](/screenshots/concert.png)
  * The following command retrieves movie information for any movie the user inputs, if a movie is not entered 
    it will show the information for the movie Mr. Nobody: 
   * node liri.js movie-this <movie name here>
   ![ScreenShot](/screenshots/movie.png)
   ![ScreenShot](/screenshots/moviealt.png)
  * The following command retrieves song information for any song the user inputs, if a song is not entered it 
    will show the information for 'The Sign' by Ace of Base:
   * node liri.js spotify-this-song <song name here>
   ![ScreenShot](/screenshots/song.png)
   ![ScreenShot](/screenshots/songalt.png)
  * The following command takes in information from a text file and runs the command written in the text file: 
   * node liri.js do-what-it-says 
   ![ScreenShot](/screenshots/do.png)
 
   
   
      
  

