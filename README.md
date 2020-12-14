# Assignment 1 - ReactJS app.

Name: Stephen Malone

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - A Top Rated movies page to view 20 of the best movies out there. 
 + Feature 2 - A Now Playing movies page to view the latest releases.
 + Feature 3 - Photos of the Cast and Crew members of every film on the application.
 + Feature 4 - Information such as real name and popularity of every cast and crew member.

## API Data Model.

+ https://api.themoviedb.org/3/movie/now_playing - Used to get the latest released movies.
+ https://api.themoviedb.org/3/movie/top_rated - Used to get the top rated movies.
+ https://api.themoviedb.org/3/movie/${id}/credits - Used to access the cast and crew members and information about them.

### UI Design.

![][toprated]
>Shows the top rated movies from the api.

![][nowplaying]
>Shows the movies that are just released. 

![][castncrew]
>Shows the cast and crew members for every movie and details about them. 

![][watchlist]
>Adding movies to a watch later list. 

## Routing.

+ /movies/toprated - display the top rated movies.
+ /movies/nowplaying - displays the latest released movies.
+ /movies/{id}/credits - displays information about crew and cast members.
+ /movies/watchlater - displays movies added to watch list.

## Independent learning (If relevant).

Investigation and use of the TMDB API Documentation for project.

---------------------------------

[toprated]: ./public/toprated.PNG
[nowplaying]: ./public/nowplaying.PNG
[castncrew]: ./public/castncrew.PNG
[watchlist]: ./public/watchlist.PNG