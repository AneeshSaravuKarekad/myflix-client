import * as api from '../api';
import { LOAD_USER_DETAILS } from '../constants/userConstants';

export const setUserDetails = (user) => ({
  type: LOAD_USER_DETAILS,
  payload: user,
});
