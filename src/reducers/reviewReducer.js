import {
  GET_REVIEWS_REQUEST,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAIL,
  ADD_REVIEW_REQUEST,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAIL,
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

    case ADD_REVIEW_REQUEST:
      return {
        isLoading: true,
      };

    case ADD_REVIEW_SUCCESS:
      return {
        isLoading: false,
        message: action.payload.message,
      };

    case ADD_REVIEW_FAIL:
      return {
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
