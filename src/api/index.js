import URL from './url';
import axios from 'axios';

export const fetchAllMovies = (title) => {
  return axios.get(`${URL.movies}?title=${title}`);
};
