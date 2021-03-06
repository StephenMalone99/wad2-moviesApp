import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavorites from '../components/buttons/addToFavorites'
import WatchLaterButton from '../components/buttons/watchLater'

const MoviesNowPlaying = () => {
  const context = useContext(MoviesContext);
  const nowplaying = context.nowplaying.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Now Playing!"
      movies={nowplaying}  /* Changed */
      action={(movie) => {
        return <WatchLaterButton movie={movie} />;
      }}
    />
  );
};

export default MoviesNowPlaying;