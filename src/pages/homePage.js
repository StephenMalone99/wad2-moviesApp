import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'

const MovieListPage = () => {
  const context = useContext(MoviesContext) 

  return (
      <PageTemplate 
        title='No. Movies'
        movies={context.movies}
        buttonHandler={context.addToFavorites}
      />
  );
};

export default MovieListPage;