import * as api from '../api';
import {
  GET_FAVOURITES_REQUEST,
  GET_FAVOURITES_SUCCESS,
  GET_FAVOURITES_FAIL,
  ADD_FAVOURITES_FAIL,
  ADD_FAVOURITES_REQUEST,
  ADD_FAVOURITES_SUCCESS,
  REMOVE_FAVOURITES_FAIL,
  REMOVE_FAVOURITES_SUCCESS,
  REMOVE_FAVOURITES_REQUEST,
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

export const addFavourites = (movieId) => async (dispatch) => {
  try {
    dispatch({ type: ADD_FAVOURITES_REQUEST });
    const { data } = await api.addFavourites(movieId);
    dispatch({ type: ADD_FAVOURITES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_FAVOURITES_FAIL, payload: error.response?.data });
  }
};

export const removeFavourites = (movieId) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_FAVOURITES_REQUEST });

    const { data } = await api.removeFavourites(movieId);
    dispatch({ type: REMOVE_FAVOURITES_SUCCESS, payload: data });
  } catch (error) {
    console.log('error ', error);
    dispatch({ type: REMOVE_FAVOURITES_FAIL, payload: error.response?.data });
  }
};
