import React, { useEffect, createContext, useReducer } from "react";
import { getMovies } from "../api/tmdb-api";
import { getUpcomingMovies} from "../api/tmdb-api";

export const MoviesContext = createContext(null);
export const UpcomingMoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
      };
    case "load":
      return { movies: action.payload.movies };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
  }, []);


  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        favorites: state.favorites,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

const UpcomingMoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
  }, []);


  return (
    <UpcomingMoviesContext.Provider
      value={{
        movies: state.movies,
        favorites: state.favorites,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </UpcomingMoviesContext.Provider>
  );
};



export default MoviesContextProvider;
export {UpcomingMoviesContextProvider};