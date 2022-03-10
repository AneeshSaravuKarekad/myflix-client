import * as api from '../api';
import {
  GET_FAVOURITES_REQUEST,
  GET_FAVOURITES_SUCCESS,
  GET_FAVOURITES_FAIL,
} from '../constants/favouritesConstants.js';

export const favourites = () => async (dispatch) => {
  try {
    dispatch({ type: GET_FAVOURITES_REQUEST });

    const { data } = await api.fetchFavourites();

    dispatch({ type: GET_FAVOURITES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_FAVOURITES_FAIL, payload: error.response?.data });
  }
};
