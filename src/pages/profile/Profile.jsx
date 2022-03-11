import React from 'react';
import { Container, Row } from 'react-bootstrap';

import './profile.scss';

const Profile = () => {
  return (
    <Container className="profile-container">
      <Row className="profile-header justify-content-center">
        <h1>Manage Profile</h1>
      </Row>
    </Container>
  );
};

export default Profile;
