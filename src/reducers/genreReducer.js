import {
  GET_GENRE_REQUEST,
  GET_GENRE_SUCCESS,
  GET_GENRE_FAIL,
  GET_GENRE_SPECIFIC_MOVIES_REQUEST,
  GET_GENRE_SPECIFIC_MOVIES_SUCCESS,
  GET_GENRE_SPECIFIC_MOVIES_FAIL,
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

    case GET_GENRE_SPECIFIC_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        movies: [],
      };

    case GET_GENRE_SPECIFIC_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload.movies,
        page: action.payload.page,
        pages: action.payload,
        count: action.payload.count,
      };

    case GET_GENRE_SPECIFIC_MOVIES_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
