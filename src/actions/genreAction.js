import * as api from '../api';
import {
  GET_GENRE_REQUEST,
  GET_GENRE_SUCCESS,
  GET_GENRE_FAIL,
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
