import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MoviesContextProvider from "./contexts/moviesContext";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import TopRatedMovies from './pages/topRatedMoviesPage';
import FavoriteMoviesPage from './pages/FavoritesMoviesPage';
import MoviesNowPlaying from './pages/nowPlayingPage';
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMovies from './pages/upcomingMoviesPage';
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'


const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
          <SiteHeader /> 
          <div className="container-fluid">
          <MoviesContextProvider> 
        <GenresContextProvider>  
            <Switch>
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/toprated" component={TopRatedMovies} />
          <Route exact path="/movies/nowplaying" component={MoviesNowPlaying} />
          <Route exact path="/movies/upcoming" component={UpcomingMovies} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
          </Switch>
          </GenresContextProvider>    
          </MoviesContextProvider>  
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));