import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext, UpcomingMoviesContext} from '../contexts/moviesContext'
import AddToFavorites from '../components/buttons/addToFavorites'
import WatchLaterButton from '../components/buttons/watchLater'

const UpcomingMovies = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="New Movies!"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <WatchLaterButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingMovies;