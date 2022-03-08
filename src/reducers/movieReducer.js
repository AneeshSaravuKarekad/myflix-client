import {
  ALL_MOVIES_FAIL,
  ALL_MOVIES_REQUEST,
  ALL_MOVIES_SUCCESS,
  CLEAR_ALL_ERRORS,
} from '../constants/movieConstants';

export const movieReducer = (state = { isLoading: true }, action) => {
  switch (action.type) {
    case ALL_MOVIES_REQUEST:
      return {
        isLoading: true,
        result: [],
      };

    case ALL_MOVIES_SUCCESS:
      return {
        isLoading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        count: action.payload.count,
        total: action.payload.total,
        result: action.payload.movies,
      };

    case ALL_MOVIES_FAIL:
      return {
        isLoading: false,
        error: action.payload,
      };

    case CLEAR_ALL_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
