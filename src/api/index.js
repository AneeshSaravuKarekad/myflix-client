import URL from './url';
import axios from 'axios';

function getToken() {
  const userObject = JSON.parse(localStorage.getItem('persist:auth')).user;
  const token = JSON.parse(userObject).details.token;
  return token;
}

export const fetchAllMovies = (title) => {
  const token = getToken();
  return axios.get(`${URL.movies}?title=${title}`, {
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
