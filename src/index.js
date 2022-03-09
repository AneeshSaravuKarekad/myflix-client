import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persister, store } from './store';

import App from './App';

import './index.scss';

export default class MyFlixApplication extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

const root = document.getElementsByClassName('root')[0];
ReactDOM.render(React.createElement(MyFlixApplication), root);
