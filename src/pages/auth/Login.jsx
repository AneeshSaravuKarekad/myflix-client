import React, { useState, useEffect } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import showIcon from '../../../public/showIcon.png';
import hideIcon from '../../../public/hideIcon.png';

import './auth.scss';

const Login = () => {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(showIcon);

  const toggleEye = () => {
    if (type === 'password') {
      setType('text');
      setIcon(showIcon);
    } else {
      setType('password');
      setIcon(hideIcon);
    }
  };

  return (
    <Form className="auth-form">
      <h2 className="form-header">Login</h2>
      <Form.Label>Email</Form.Label>
      <InputGroup>
        <FormControl
          placeholder="Enter Email"
          aria-label="email"
          type="email"
        />
      </InputGroup>

      <Form.Label>Password</Form.Label>
      <InputGroup className="password-input-group">
        <FormControl
          placeholder="Enter password"
          aria-label="password"
          type={type}
        />
        <img
          className="eye-icon"
          src={icon}
          alt="show/hide password"
          onClick={toggleEye}
        />
      </InputGroup>
      <Form.Text className="text-muted">
        Don't have an account yet?{' '}
        <Link to="#" className="register-login-link" onClick={() => newUser()}>
          Register
        </Link>{' '}
        instead
      </Form.Text>

      <Button className="submit-button" variant="warning">
        Login
      </Button>
    </Form>
  );
};

export default Login;
