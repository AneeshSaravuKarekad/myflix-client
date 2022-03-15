import * as api from '../api';
import {
  ALL_MOVIES_FAIL,
  ALL_MOVIES_REQUEST,
  ALL_MOVIES_SUCCESS,
  CLEAR_ALL_ERRORS,
  FETCH_MOVIES_BY_GENRE_FAIL,
  FETCH_MOVIES_BY_GENRE_REQUEST,
  FETCH_MOVIES_BY_GENRE_SUCCESS,
  FETCH_MOVIES_BY_SINGLE_GENRE_FAIL,
  FETCH_MOVIES_BY_SINGLE_GENRE_REQUEST,
  FETCH_MOVIES_BY_SINGLE_GENRE_SUCCESS,
  MOVIES_BY_ACTOR_FAIL,
  MOVIES_BY_ACTOR_REQUEST,
  MOVIES_BY_ACTOR_SUCCESS,
  MOVIES_BY_DIRECTOR_FAIL,
  MOVIES_BY_DIRECTOR_REQUEST,
  MOVIES_BY_DIRECTOR_SUCCESS,
  MOVIE_DETAILS_FAIL,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
} from '../constants/movieConstants';

export const fetchMovies =
  (title = '', page = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_MOVIES_REQUEST });

      const { data } = await api.fetchAllMovies(title, page);
      dispatch({ type: ALL_MOVIES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ALL_MOVIES_FAIL,
        payload: error.response?.data.message,
      });
    }
  };

export const fetchMovieDetails = (movieId) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_DETAILS_REQUEST });

    const { data } = await api.fetchMovieById(movieId);
    dispatch({ type: MOVIE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MOVIE_DETAILS_FAIL, payload: error.response?.data });
  }
};

export const fetchMoviesByActor = (actorName) => async (dispatch) => {
  try {
    dispatch({ type: MOVIES_BY_ACTOR_REQUEST });

    const { data } = await api.fetchMoviesByActor(actorName);

    dispatch({ type: MOVIES_BY_ACTOR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MOVIES_BY_ACTOR_FAIL, payload: error.response?.data });
  }
};

export const fetchMoviesByDirector = (directorName) => async (dispatch) => {
  try {
    dispatch({ type: MOVIES_BY_DIRECTOR_REQUEST });

    const { data } = await api.fetchMoviesByDirector(directorName);
    dispatch({ type: MOVIES_BY_DIRECTOR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MOVIES_BY_DIRECTOR_FAIL, payload: error.response?.data });
  }
};

export const fetchMoviesByGenre = (genreName) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_MOVIES_BY_GENRE_REQUEST });

    const { data } = await api.fetchMoviesByGenre(genreName);
    dispatch({
      type: FETCH_MOVIES_BY_GENRE_SUCCESS,
      payload: data,
      genre: `${genreName}`,
    });
  } catch (error) {
    dispatch({
      type: FETCH_MOVIES_BY_GENRE_FAIL,
      payload: error.response?.data,
    });
  }
};

export const fetchMoviesBySingleGenre = (genreName) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_MOVIES_BY_SINGLE_GENRE_REQUEST });

    const { data } = await api.fetchMoviesByGenre(genreName);
    dispatch({ type: FETCH_MOVIES_BY_SINGLE_GENRE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FETCH_MOVIES_BY_SINGLE_GENRE_FAIL,
      payload: error.response?.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ALL_ERRORS });
};
