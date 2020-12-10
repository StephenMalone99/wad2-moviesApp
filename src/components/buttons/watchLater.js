import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const WatchLaterButton= ({ movie }) => {
  const context = useContext(MoviesContext);
  const handleAddToWatchLater = e => {
    e.preventDefault();
    context.watchLater(movie.id) 
   };

  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick = {handleAddToWatchLater}
    >
      Watch Later
    </button>
  );
};

export default WatchLaterButton;