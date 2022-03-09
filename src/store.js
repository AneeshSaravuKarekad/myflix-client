import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistStore from 'redux-persist/es/persistStore';

import appReducer from './reducers/appReducer';

const middleware = [thunk];

const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persister = persistStore(store);

export { store, persister };
