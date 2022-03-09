import React from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './routes/routesCheck';
import { LOGIN_PATH, MOVIES_PATH } from './routes/routesPath';

import './app.scss';
import Welcome from './pages/auth/Welcome';
import Movies from './pages/movies/Movies';

const App = ({ user }) => {
  return (
    <div className="base-container">
      <Routes>
        {/* TODO: change logged in path to home path */}
        <Route
          path={LOGIN_PATH}
          element={
            <PublicRoute>
              <Welcome />
            </PublicRoute>
          }
          loggedInPath={MOVIES_PATH}
          exact
        />
        <Route
          path={MOVIES_PATH}
          element={
            <PrivateRoute>
              <Movies />
            </PrivateRoute>
          }
          exact
        />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(App);
