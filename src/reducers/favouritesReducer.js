import {
  GET_FAVOURITES_REQUEST,
  GET_FAVOURITES_SUCCESS,
  GET_FAVOURITES_FAIL,
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
      console.log(action.payload);
      return {
        isloading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
