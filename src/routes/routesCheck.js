import React from 'react';
import { Navigate } from 'react-router-dom';
import { store } from '../store';
// import LOGIN_PATH from '../pages/auth/login';

// export const PublicRoute = ({
//   loggedInPath,
//   component: Component,
//   ...rest
// }) => {
//   const state = store.getState();
//   const details = state.user.details;
//   let token = details?.token;
//   const navigate = useNavigate;

//   return (
//     <Route
//       {...rest}
//       element={() => {
//         return !token ? <Component /> : navigate(loggedInPath);
//       }}
//     />
//   );
// };

export function PrivateRoute({ children }) {
  const state = store.getState();
  const details = state.user.details;
  let token = details?.token;

  return token ? children : <Navigate to="/" />;
}
