import * as api from '../api';
import {
  GET_GENRE_REQUEST,
  GET_GENRE_SUCCESS,
  GET_GENRE_FAIL,
  GET_GENRE_SPECIFIC_MOVIES_FAIL,
  GET_GENRE_SPECIFIC_MOVIES_SUCCESS,
  GET_GENRE_SPECIFIC_MOVIES_REQUEST,
} from '../constants/genreConstants';

export const fetchGenres = () => async (dispatch) => {
  try {
    dispatch({ type: GET_GENRE_REQUEST });

    const { data } = await api.fetchGenres();

    dispatch({ type: GET_GENRE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_GENRE_FAIL, payload: error.response?.data.message });
  }
};

export const fetchMovies = (genreName) => async (dispatch) => {
  try {
    dispatch({ type: GET_GENRE_SPECIFIC_MOVIES_REQUEST });

    const { data } = await api.fetchMoviesByGenre(genreName);
    dispatch({ type: GET_GENRE_SPECIFIC_MOVIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_GENRE_SPECIFIC_MOVIES_FAIL });
  }
};
