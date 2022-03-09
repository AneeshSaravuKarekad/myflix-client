import React from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './app.scss';
import Welcome from './pages/auth/Welcome';
import Movies from './pages/movies/Movies';

const App = ({ user }) => {
  console.log(user);
  return (
    <div className="base-container">
      <Routes>
        <Route path="/" element={<Welcome />} exact />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return { user: state.user };
};

export default connect(mapStatetoProps)(App);
