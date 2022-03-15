import * as api from '../api';
import {
  GET_REVIEWS_REQUEST,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAIL,
} from '../constants/reviewConstants';

export const getReviews = (movieId) => async (dispatch) => {
  try {
    dispatch({ type: GET_REVIEWS_REQUEST });
    const { data } = await api.getReviews(movieId);
    dispatch({ type: GET_REVIEWS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_REVIEWS_FAIL, payload: error.response?.data.message });
  }
};
