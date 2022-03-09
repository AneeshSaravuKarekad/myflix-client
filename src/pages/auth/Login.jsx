import React, { useState, useEffect } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import showIcon from '../../../public/showIcon.png';
import hideIcon from '../../../public/hideIcon.png';

import './auth.scss';

const Login = ({ toggle }) => {
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
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        console.log('values: ', values);
        console.log('Submitting');
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Invalid Email')
          .required('Email is required'),
        password: Yup.string().required('Password is required'),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          isValid,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className="form-container">
            <h2 className="form-header">Login</h2>
            <Form className="auth-form" onSubmit={handleSubmit}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Form.Label>Email</Form.Label>
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </div>
              <InputGroup>
                <FormControl
                  name="email"
                  placeholder="Enter Email"
                  aria-label="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email && 'error'}
                />
              </InputGroup>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Form.Label>Password</Form.Label>
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </div>
              <InputGroup className="password-input-group">
                <FormControl
                  name="password"
                  placeholder="Enter password"
                  aria-label="password"
                  type={type}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password && 'error'}
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
                <Link
                  to="#"
                  className="register-login-link"
                  onClick={() => toggle()}
                >
                  Register
                </Link>{' '}
                instead
              </Form.Text>

              <Button
                type="submit"
                className="submit-button"
                variant="warning"
                disabled={!isValid || isSubmitting}
              >
                Login
              </Button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
