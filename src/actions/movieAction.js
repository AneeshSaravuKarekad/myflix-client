import * as api from '../api';
import {
  ALL_MOVIES_FAIL,
  ALL_MOVIES_REQUEST,
  ALL_MOVIES_SUCCESS,
  CLEAR_ALL_ERRORS,
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

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ALL_ERRORS });
};
