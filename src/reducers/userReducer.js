import {
  LOAD_USER_DETAILS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from '../constants/userConstants';

export const userReducer = (state = { details: null }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticated: false,
        details: { token: action.payload },
      };

    case USER_LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        details: { token: action.payload.token },
      };

    case USER_LOGIN_FAIL:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};
