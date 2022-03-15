import React from 'react';
import { connect, useSelector } from 'react-redux';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './routes/routesCheck';

import {
  ACTOR_PATH,
  FAVOURITES_PATH,
  HOME_PATH,
  LOGIN_PATH,
  MOVIES_PATH,
  PROFILE_PATH,
  GENRE_PATH,
} from './routes/routesPath';

import './app.scss';
import Welcome from './pages/auth/Welcome';
import Movies from './pages/movies/Movies';
import Header from './components/header/Header';
import Favourites from './pages/favourites/Favourites';
import Profile from './pages/profile/Profile';
import MovieDetails from './pages/movieDetails/MovieDetails';
import Actor from './pages/actor/Actor';
import Home from './pages/home/Home';
import Genres from './pages/genres/Genres';

const App = ({ user }) => {
  return (
    <div className="base-container">
      {user.isAuthenticated && <Header />}
      <Routes>
        {/* TODO: change logged in path to home path */}
        <Route
          path={LOGIN_PATH}
          element={
            <PublicRoute>
              <Welcome />
            </PublicRoute>
          }
          loggedInPath={`${MOVIES_PATH}/page/:pageNumber`}
          exact
        />
        <Route
          path={`${MOVIES_PATH}/page/:pageNumber`}
          element={
            <PrivateRoute>
              <Movies />
            </PrivateRoute>
          }
          exact
        />
        <Route
          path={`${MOVIES_PATH}`}
          element={
            <PrivateRoute>
              <Movies />
            </PrivateRoute>
          }
          exact
        />

        <Route
          path={`${MOVIES_PATH}/search/:title/page/:pageNumber`}
          element={
            <PrivateRoute>
              <Movies />
            </PrivateRoute>
          }
          exact
        />

        <Route
          path={`${ACTOR_PATH}/:actorName`}
          element={
            <PrivateRoute>
              <Actor />
            </PrivateRoute>
          }
          exact
        />

        <Route
          path={`${FAVOURITES_PATH}`}
          element={
            <PrivateRoute>
              <Favourites />
            </PrivateRoute>
          }
        />

        <Route
          path={`${PROFILE_PATH}`}
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path={`${MOVIES_PATH}/:movieId`}
          element={
            <PrivateRoute>
              <MovieDetails />
            </PrivateRoute>
          }
        />

        <Route
          path={`${HOME_PATH}`}
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path={`${GENRE_PATH}/:genreName`}
          element={
            <PrivateRoute>
              <Genres />
            </PrivateRoute>
          }
        />

        {/* <Route
          path={`${MOVIES_PATH}/search/:title`}
          element={
            <PrivateRoute>
              <Movies />
            </PrivateRoute>
          }
          exact
        /> */}
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(App);
