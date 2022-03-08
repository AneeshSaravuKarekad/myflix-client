import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './app.scss';
import Movies from './pages/movies/Movies';

const App = () => {
  return (
    <div className="base-container">
      <Routes>
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};

export default App;
