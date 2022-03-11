import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
} from '../constants/userConstants';

export const profileReducer = (state = { details: null }, action) => {
  switch (action.type) {
    // PROFILE
    case LOAD_USER_REQUEST:
      return {
        isLoading: true,
        user: {},
      };

    case LOAD_USER_SUCCESS:
      return {
        isLoading: false,
        user: action.payload.user,
      };

    case LOAD_USER_FAIL:
      return {
        isLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
