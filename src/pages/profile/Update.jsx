import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import showIcon from '../../../public/showIcon.png';
import hideIcon from '../../../public/hideIcon.png';
import { deleteProfile, updateProfile } from '../../actions/userAction';

const Update = ({ prevEmail, prevUsername, prevBirthDate }) => {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(showIcon);
  const [customError, setCustomError] = useState('');
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.user);
  const toggleEye = () => {
    if (type === 'password') {
      setType('text');
      setIcon(showIcon);
    } else {
      setType('password');
      setIcon(hideIcon);
    }
  };

  const handleDeregister = () => {
    const del = confirm('Are you sure you want to Deregister?');
    if (del) {
      dispatch(deleteProfile());
      localStorage.clear();
      window.location.reload(false);
    }
  };

  return (
    <Formik
      initialValues={{
        email: prevEmail,
        username: prevUsername,
        password: '',
        confirmPassword: '',
        birthDate: prevBirthDate,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch(updateProfile(values));

          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Invalid Email')
          .required('Email is required'),

        password: Yup.string()
          .required('Password is required')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
          ),

        confirmPassword: Yup.string().oneOf(
          [Yup.ref('password'), null],
          'Passwords must match'
        ),

        birthDate: Yup.date().required('Date is required'),

        username: Yup.string()
          .required('Username is required')
          .min(5, 'Username should be between 5 to 15 characters')
          .max(15, 'Username should be between 5 to 15 characters'),
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
          <div className="form-container" style={{ width: '100%' }}>
            <Form className="auth-form" onSubmit={handleSubmit}>
              {/* Email */}
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
              {/* Username */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Form.Label>Username</Form.Label>
                {errors.username && touched.username && (
                  <div className="input-feedback">{errors.username}</div>
                )}
              </div>
              <InputGroup>
                <FormControl
                  name="username"
                  placeholder="Enter Email"
                  aria-label="email"
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.username && touched.username && 'error'}
                />
              </InputGroup>
              {/* Password */}
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
              {/* Confirm Password */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Form.Label>Confirm Password</Form.Label>
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="input-feedback">{errors.confirmPassword}</div>
                )}
              </div>
              <InputGroup className="password-input-group">
                <FormControl
                  name="confirmPassword"
                  placeholder="Enter password"
                  aria-label="confirm password"
                  type={type}
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword && 'error'
                  }
                />
                <img
                  className="eye-icon"
                  src={icon}
                  alt="show/hide password"
                  onClick={toggleEye}
                />
              </InputGroup>
              {/* Date of Birth */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Form.Label>Date of Birth</Form.Label>
                {errors.birthDate && touched.birthDate && (
                  <div className="input-feedback">{errors.birthDate}</div>
                )}
              </div>
              <InputGroup>
                <FormControl
                  name="birthDate"
                  type="Date"
                  value={values.birthDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.birthDate && touched.birthDate && 'error'}
                />
              </InputGroup>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  type="submit"
                  className="update-button"
                  variant="outline-warning"
                >
                  Update
                </Button>

                <Button
                  className="delete-button"
                  variant="danger"
                  onClick={handleDeregister}
                >
                  Deregister
                </Button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

Update.propTypes = {
  prevEmail: PropTypes.string,
  prevUsername: PropTypes.string,
  prevBirthDate: PropTypes.date,
};

export default Update;
