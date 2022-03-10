import {
  GET_FAVOURITES_REQUEST,
  GET_FAVOURITES_SUCCESS,
  GET_FAVOURITES_FAIL,
  ADD_FAVOURITES_REQUEST,
  ADD_FAVOURITES_SUCCESS,
  ADD_FAVOURITES_FAIL,
  REMOVE_FAVOURITES_REQUEST,
  REMOVE_FAVOURITES_SUCCESS,
  REMOVE_FAVOURITES_FAIL,
} from '../constants/favouritesConstants.js';

export const favouritesReducer = (state = { favourites: [] }, action) => {
  switch (action.type) {
    // FAVOURITES - GET

    case GET_FAVOURITES_REQUEST:
      return {
        isLoading: true,
        result: [],
      };

    case GET_FAVOURITES_SUCCESS:
      return {
        isLoading: false,
        count: action.payload.favourites.length,
        result: action.payload.favourites,
      };

    case GET_FAVOURITES_FAIL:
      return {
        isloading: false,
        error: action.payload,
      };

    // FAVOURITES - ADD

    case ADD_FAVOURITES_REQUEST:
      return {
        isLoading: true,
        result: [],
      };

    case ADD_FAVOURITES_SUCCESS:
      return {
        isLoading: false,
        count: action.payload.favourites.length,
        result: action.payload.favourites,
      };

    case ADD_FAVOURITES_FAIL:
      return {
        isLoading: false,
        error: action.payload,
      };

    // FAVOURITES - REMOVE

    case REMOVE_FAVOURITES_REQUEST:
      return {
        isLoading: true,
        result: [],
      };

    case REMOVE_FAVOURITES_SUCCESS:
      console.log(action.payload);
      return {
        isLoading: false,
        count: action.payload.favourites.length,
        result: action.payload.favourites,
      };

    case REMOVE_FAVOURITES_FAIL:
      return {
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
