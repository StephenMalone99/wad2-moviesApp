import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavorites from '../components/buttons/addToFavorites'
import WatchLaterButton from '../components/buttons/watchLater'

const PopularMovies = () => {
  const context = useContext(MoviesContext);
  const popular = context.popular.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="New Movies!"
      movies={popular}  /* Changed */
      action={(movie) => {
        return <WatchLaterButton movie={movie} />;
      }}
    />
  );
};

export default PopularMovies;