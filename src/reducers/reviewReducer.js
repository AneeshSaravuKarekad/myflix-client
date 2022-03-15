import {
  GET_REVIEWS_REQUEST,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAIL,
} from '../constants/reviewConstants';

export const reviewReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case GET_REVIEWS_REQUEST:
      return {
        isLoading: true,
        reviews: [],
      };

    case GET_REVIEWS_SUCCESS:
      return {
        isLoading: false,
        count: action.payload.reviews.length,
        reviews: action.payload.reviews,
      };

    case GET_REVIEWS_FAIL:
      return {
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
