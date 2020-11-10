import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const WatchLaterButton= ({ movie }) => {
  const context = useContext(MoviesContext);

// Put code here to handle adding movies to a watch later page

  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
    >
      Watch Later
    </button>
  );
};

export default WatchLaterButton;