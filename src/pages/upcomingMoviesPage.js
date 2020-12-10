import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import WatchLaterButton from '../components/buttons/watchLater'

const UpcomingMovies = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  // New
    return !("watchlater" in m);
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