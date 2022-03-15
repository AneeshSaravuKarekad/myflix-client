import {
  GET_GENRE_REQUEST,
  GET_GENRE_SUCCESS,
  GET_GENRE_FAIL,
} from '../constants/genreConstants';

export const genreReducer = (state = { genres: [] }, action) => {
  switch (action.type) {
    case GET_GENRE_REQUEST:
      return {
        isLoading: true,
        genres: [],
      };

    case GET_GENRE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        count: action.payload.count,
        genres: action.payload.genres,
      };

    case GET_GENRE_FAIL:
      return {
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
