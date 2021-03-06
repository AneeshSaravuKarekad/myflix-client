import URL from './url';
import axios from 'axios';
import { store } from '../store';

function getToken() {
  const state = store.getState();
  const token = state.user.details.token;
  return token;
}

export const fetchAllMovies = (title, page, sortOption) => {
  const token = getToken();
  return axios.get(
    `${URL.movies}?title=${title}&page=${page}&sort=${sortOption}`,
    {
      headers: { Authorization: `${token}` },
    }
  );
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

export const fetchMoviesByGenre = (genreName) => {
  const token = getToken();
  return axios.get(`${URL.movies}/genres/${genreName}`, {
    headers: { Authorization: `${token}` },
  });
};

export const fetchGenres = () => {
  const token = getToken();
  return axios.get(`${URL.genres}`, {
    headers: { Authorization: `${token}` },
  });
};

export const fetchMoviesByDirector = (directorName) => {
  const token = getToken();
  return axios.get(`${URL.movies}/directors/${directorName}`, {
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

export const getReviews = (movieId) => {
  const token = getToken();
  return axios.get(`${URL.movies}/${movieId}/reviews`, {
    headers: { Authorization: `${token}` },
  });
};

export const addReview = (movieId, reviewData) => {
  const token = getToken();
  return axios.post(
    `${URL.movies}/${movieId}/reviews`,
    {
      caption: reviewData.caption,
      comment: reviewData.comment,
      stars: reviewData.stars,
    },
    { headers: { Authorization: `${token}` } }
  );
};
