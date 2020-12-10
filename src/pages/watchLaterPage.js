import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const WatchLaterPage = props => {
  const context = useContext(MoviesContext);
  const watchlater = context.upcoming.filter( m => m.watchlater )
  return (
    <MovieListPageTemplate
      movies={watchlater}
      title={"Watch Later"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WatchLaterPage;