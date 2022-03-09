import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { movieReducer } from './movieReducer';
import { userReducer } from './userReducer';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'],
};

const appReducer = combineReducers({
  user: userReducer,
  movies: movieReducer,
});

export default persistReducer(persistConfig, appReducer);
