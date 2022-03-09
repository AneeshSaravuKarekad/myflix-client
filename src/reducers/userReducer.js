import { LOAD_USER_DETAILS } from '../constants/userConstants';

export const userReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case LOAD_USER_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    default:
      return state;
  }
};
