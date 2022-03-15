import {
  ALL_MOVIES_FAIL,
  ALL_MOVIES_REQUEST,
  ALL_MOVIES_SUCCESS,
  CLEAR_ALL_ERRORS,
  FETCH_MOVIES_BY_GENRE_FAIL,
  FETCH_MOVIES_BY_GENRE_REQUEST,
  FETCH_MOVIES_BY_GENRE_SUCCESS,
  MOVIES_BY_ACTOR_FAIL,
  MOVIES_BY_ACTOR_REQUEST,
  MOVIES_BY_ACTOR_SUCCESS,
  MOVIE_DETAILS_FAIL,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIES_BY_SINGLE_GENRE_REQUEST,
  FETCH_MOVIES_BY_SINGLE_GENRE_SUCCESS,
  FETCH_MOVIES_BY_SINGLE_GENRE_FAIL,
  MOVIES_BY_DIRECTOR_REQUEST,
  MOVIES_BY_DIRECTOR_SUCCESS,
  MOVIES_BY_DIRECTOR_FAIL,
} from '../constants/movieConstants';

export const movieReducer = (state = { isLoading: true }, action) => {
  switch (action.type) {
    case ALL_MOVIES_REQUEST:
      return {
        isLoading: true,
        result: [],
      };

    case ALL_MOVIES_SUCCESS:
      return {
        isLoading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        count: action.payload.count,
        total: action.payload.total,
        result: action.payload.movies,
      };

    case ALL_MOVIES_FAIL:
      return {
        isLoading: false,
        error: action.payload,
      };

    case CLEAR_ALL_ERRORS:
      return {
        ...state,
        error: null,
      };

    case MOVIE_DETAILS_REQUEST:
      return {
        isLoading: true,
        movie: {},
      };

    case MOVIE_DETAILS_SUCCESS:
      return {
        isLoading: false,
        movie: action.payload.movie,
      };

    case MOVIE_DETAILS_FAIL:
      return {
        isLoading: false,
        error: action.payload,
      };

    case MOVIES_BY_ACTOR_REQUEST:
      return {
        isLoading: true,
        actor: {},
        movies: [],
      };

    case MOVIES_BY_ACTOR_SUCCESS:
      return {
        isLoading: false,
        movies: action.payload.movies,
        count: action.payload.count,
        actor: action.payload.actor,
      };

    case MOVIES_BY_ACTOR_FAIL:
      return {
        isLoading: false,
        error: action.payload,
      };

    case MOVIES_BY_DIRECTOR_REQUEST:
      return {
        isLoading: true,
        director: {},
        movies: [],
      };

    case MOVIES_BY_DIRECTOR_SUCCESS:
      return {
        isLoading: false,
        movies: action.payload.movies,
        count: action.payload.count,
        director: action.payload.director,
      };

    case MOVIES_BY_DIRECTOR_FAIL:
      return {
        isLoading: false,
        error: action.payload,
      };

    case FETCH_MOVIES_BY_GENRE_REQUEST:
      return {
        isLoading: true,
        genres: [],
      };

    case FETCH_MOVIES_BY_GENRE_SUCCESS:
      state.genres.push({
        name: action.genre,
        total: action.payload.total,
        count: action.payload.count,
        page: action.payload.page,
        pages: action.payload.pages,
        movies: action.payload.movies,
      });
      return {
        ...state,
        isLoading: false,
        genres: state.genres,
      };

    case FETCH_MOVIES_BY_GENRE_FAIL:
      return {
        isLoading: false,
        error: action.payload,
      };

    case FETCH_MOVIES_BY_SINGLE_GENRE_REQUEST:
      return {
        isLoading: true,
        movies: [],
      };

    case FETCH_MOVIES_BY_SINGLE_GENRE_SUCCESS:
      return {
        isLoading: false,
        total: action.payload.total,
        count: action.payload.count,
        pages: action.payload.pages,
        page: action.payload.page,
        movies: action.payload.movies,
      };

    case FETCH_MOVIES_BY_SINGLE_GENRE_FAIL:
      return {
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
