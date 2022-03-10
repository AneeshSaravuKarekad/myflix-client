import React from 'react';
import { Navigate } from 'react-router-dom';
import { store } from '../store';

export function PrivateRoute({ children }) {
  const state = store.getState();
  const details = state.user.details;
  let token = details?.token;

  return token ? children : <Navigate to="/" />;
}
export function PublicRoute({ children }) {
  const state = store.getState();
  const details = state.user.details;
  let token = details?.token;
  return !token ? children : <Navigate to="/movies/page/1" />;
}
