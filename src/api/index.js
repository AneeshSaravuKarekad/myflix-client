import URL from './url';
import axios from 'axios';
import { store } from '../store';

function getToken() {
  const state = store.getState();
  const token = state.user.details.token;
  return token;
}

export const fetchAllMovies = (title, page) => {
  const token = getToken();
  return axios.get(`${URL.movies}?title=${title}&page=${page}`, {
    headers: { Authorization: `${token}` },
  });
};

export const userLogin = (userData) => {
  const { email, password } = userData;
  return axios.post(`${URL.users}/login`, { email, password });
};

export const userRegister = (userData) => {
  const { email, password, birthDate, username } = userData;
  return axios.post(`${URL.users}/register`, {
    email,
    password,
    birthDate,
    username,
  });
};

export const fetchFavourites = () => {
  const token = getToken();
  return axios.get(`${URL.users}/favourites`, {
    headers: { Authorization: `${token}` },
  });
};
