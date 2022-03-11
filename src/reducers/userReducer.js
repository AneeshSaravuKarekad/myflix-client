import {
  USER_FAVOURITES_FAIL,
  USER_FAVOURITES_REQUEST,
  USER_FAVOURITES_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
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

    // FAVOURITES - GET

    case USER_FAVOURITES_REQUEST:
      return {
        isLoading: true,
        favourites: [],
      };

    case USER_FAVOURITES_SUCCESS:
      return {
        isLoading: false,
        count: action.payload.favourites.length,
        favourites: action.payload.favourites,
      };

    case USER_FAVOURITES_FAIL:
      return {
        isloading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
