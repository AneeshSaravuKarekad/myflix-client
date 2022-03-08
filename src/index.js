import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './App';

import './index.scss';

export default class MyFlixApplication extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  }
}

const root = document.getElementsByClassName('root')[0];
ReactDOM.render(React.createElement(MyFlixApplication), root);
