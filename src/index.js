import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.scss';

export default class MyFlixApplication extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

const root = document.getElementsByClassName('root')[0];
ReactDOM.render(React.createElement(MyFlixApplication), root);
