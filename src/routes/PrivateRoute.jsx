import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from '../contexts/user_context';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useUserContext();
  const location = useLocation();
  const path = location.pathname;

  const isAuthPage = [
    '/login',
    '/register',
    '/forgot-password',
    '/reset-password',
  ].includes(path);

  if (isAuthPage) {
    return currentUser ? (
      <Navigate to={location.state?.from ?? '/'} replace />
    ) : (
      children
    );
  }

  if (path.startsWith('/products')) {
    return currentUser && ['super', 'moderate'].includes(currentUser.privilege) ? (
      children
    ) : (
      <Navigate to={location.state?.from ?? '/'} replace />
    );
  }

  if (path.startsWith('/admins')) {
    return currentUser && currentUser.privilege === 'super' ? (
      children
    ) : (
      <Navigate to={location.state?.from ?? '/'} replace />
    );
  }

  return currentUser ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: path }} />
  );
};
export default PrivateRoute;
