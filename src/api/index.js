import URL from './url';
import axios from 'axios';

export const fetchAllMovies = (title) => {
  return axios.get(`${URL.movies}?title=${title}`);
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
