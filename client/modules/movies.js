const { handleActions } = require('redux-actions');

const FETCH_MOVIES = 'movies/FETCH_MOVIES';
const FETCH_MOVIE = 'movies/FETCHC_MOVIE';

const initialState = {
  movies: [],
  movie: {}
}


module.exports = {
  fetchMoviesActionCreator: (response) => ({
    type: FETCH_MOVIES,
    movies: response.data.data.movies
  }),
  fetchMovieActionCreator: (response) => ({
    type: FETCH_MOVIE,
    index: response.data.data.movie
  }),
  reducer: handleActions({
    [FETCH_MOVIES]: (state, action) => ({
      ...state,
      all: action.movies
    }),
    [FETCH_MOVIE]: (state, action) => ({
      ...state,
      current: state.all[action.index - 1]
    })
  }, initialState)
}