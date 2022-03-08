import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './app.scss';

const App = () => {
  return (
    <div className="base-container">
      <Routes>
        <Route path="/movies" element={<h1>AppComponent</h1>} />
      </Routes>
    </div>
  );
};

export default App;
