import React from 'react';
import { Row } from 'react-bootstrap';

import Logo from '../../../public/myFlixLogo.png';
import Login from './login';

import './welcome.scss';

const Welcome = () => {
  return (
    <div className="welcome-page-container">
      <Row className="banner">
        <img src={Logo} alt="myFlix logo" />
      </Row>
      <Row className="form-row justify-content-center">
        <Login />
      </Row>
    </div>
  );
};

export default Welcome;
