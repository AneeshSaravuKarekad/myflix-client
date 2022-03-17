import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';

import Logo from '../../../public/myFlixLogo.png';
import Login from './Login';
import Register from './register';

import './welcome.scss';

const Welcome = () => {
  const [form, setForm] = useState('login');

  const handleToggle = () => {
    if (form === 'login') {
      setForm('register');
    } else {
      setForm('login');
    }
  };

  return (
    <div className="welcome-page-container">
      <Row className="banner">
        <img src={Logo} alt="myFlix logo" />
      </Row>
      <div className="form-row justify-content-center">
        {form === 'login' ? (
          <Login toggle={handleToggle} />
        ) : (
          <Register toggle={handleToggle} />
        )}
      </div>
    </div>
  );
};

export default Welcome;
