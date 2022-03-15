import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { movieReducer } from './movieReducer';
import { userReducer } from './userReducer';
import { favouritesReducer } from './favouritesReducer';
import { profileReducer } from './profileReducer';
import { genreReducer } from './genreReducer';
import { reviewReducer } from './reviewReducer';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'],
};

const appReducer = combineReducers({
  user: userReducer,
  movies: movieReducer,
  favourites: favouritesReducer,
  profile: profileReducer,
  genres: genreReducer,
  reviews: reviewReducer,
});

export default persistReducer(persistConfig, appReducer);
