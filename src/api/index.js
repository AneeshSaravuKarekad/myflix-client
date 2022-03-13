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

export const fetchMovieById = (movieId) => {
  const token = getToken();
  return axios.get(`${URL.movies}/${movieId}`, {
    headers: { Authorization: `${token}` },
  });
};

export const fetchMoviesByActor = (actorName) => {
  const token = getToken();
  return axios.get(`${URL.movies}/actors/${actorName}`, {
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

export const addFavourites = (movieId) => {
  const token = getToken();
  return axios.put(
    `${URL.users}/favourites`,
    { movieId },
    {
      headers: { Authorization: `${token}` },
    }
  );
};

export const removeFavourites = (movieId) => {
  const token = getToken();

  return axios.delete(`${URL.users}/favourites/${movieId}`, {
    headers: { Authorization: `${token}` },
  });
};

export const loadProfile = () => {
  const token = getToken();
  return axios.get(`${URL.users}/profile`, {
    headers: { Authorization: `${token}` },
  });
};

export const updateProfile = (userData) => {
  const token = getToken();
  const { username, password, birthDate, email } = userData;
  return axios.post(
    `${URL.users}/profile`,
    {
      username,
      password,
      email,
      birthDate,
    },
    { headers: { Authorization: `${token}` } }
  );
};

export const deleteProfile = () => {
  const token = getToken();
  return axios.delete(`${URL.users}/profile`, {
    headers: { Authorization: `${token}` },
  });
};
