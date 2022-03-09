import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './app.scss';
import Welcome from './pages/auth/Welcome';
import Movies from './pages/movies/Movies';

const App = () => {
  return (
    <div className="base-container">
      <Routes>
        <Route path="/" element={<Welcome />} exact />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};

export default App;
