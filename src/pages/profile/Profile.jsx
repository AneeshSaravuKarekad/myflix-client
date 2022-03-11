import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loadProfile } from '../../actions/userAction';
import moment from 'moment';

import './profile.scss';
import Update from './Update';

const Profile = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(loadProfile());
  }, [dispatch]);

  return (
    <Container className="profile-container">
      <Row className="profile-header justify-content-center">
        <h1> Profile</h1>
      </Row>

      <hr />

      {!isLoading && user ? (
        <>
          <div className="profile-body">
            <Row className="justify-content-center">
              <Col className="profile-label">
                <h3>Email</h3>
              </Col>
              <Col className="profile-detail">{user.email}</Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="profile-label">
                <h3>Name</h3>
              </Col>
              <Col className="profile-detail">{user.username}</Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="profile-label">
                <h3>Birth Date</h3>{' '}
              </Col>
              <Col className="profile-detail">{user.birthDate}</Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="profile-label">
                <h3>Member Since</h3>{' '}
              </Col>
              <Col className="profile-detail">
                {moment(user.createdAt).startOf('day').fromNow()}
              </Col>
            </Row>
          </div>
          <div className="profile-form">
            <h2
              className="profile-header"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              Update Profile
            </h2>
            <Update
              prevBirthDate={user.birthDate}
              prevEmail={user.email}
              prevUsername={user.username}
            />
          </div>
        </>
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </Container>
  );
};

export default Profile;
