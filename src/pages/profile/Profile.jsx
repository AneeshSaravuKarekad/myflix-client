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
    <Container className="profile-container" style={{ marginInline: 'auto' }}>
      <Row className="profile-header justify-content-center">
        <h1> Profile</h1>
      </Row>

      <hr />

      {!isLoading && user ? (
        <Container fluid>
          <Row style={{ gap: '14rem', alignItems: 'center' }}>
            <Col>
              <div className="profile-body">
                <Row className="justify-content-center">
                  <Col className="profile-label">
                    <h4>Email</h4>
                  </Col>
                  <Col className="profile-detail">{user.email}</Col>
                </Row>
                <Row className="justify-content-center">
                  <Col className="profile-label">
                    <h4>Name</h4>
                  </Col>
                  <Col className="profile-detail">{user.username}</Col>
                </Row>
                <Row className="justify-content-center">
                  <Col className="profile-label">
                    <h4>Birth Date</h4>{' '}
                  </Col>
                  <Col className="profile-detail">{user.birthDate}</Col>
                </Row>
                <Row className="justify-content-center">
                  <Col className="profile-label">
                    <h4>Member Since</h4>{' '}
                  </Col>
                  <Col className="profile-detail">
                    {moment(user.createdAt).startOf('second').fromNow()}
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
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
            </Col>
          </Row>
        </Container>
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </Container>
  );
};

export default Profile;
