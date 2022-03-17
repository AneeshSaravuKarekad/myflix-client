import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from '../constants/userConstants';

export const userReducer = (state = { details: null }, action) => {
  switch (action.type) {
    // LOGIN

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

    // REGISTER
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        isAuthenticated: false,
        details: { token: action.payload },
      };

    case USER_REGISTER_SUCCESS:
      return {
        isAuthenticated: true,
        details: { token: action.payload.token },
      };

    case USER_REGISTER_FAIL:
      return {
        error: action.payload,
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: 'Sorry to see you go!',
      };

    case DELETE_USER_FAIL:
      return {
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
