import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { getIsLoggedIn } from '@services/localeStorage/localeStorage';

import { RouteProps } from './types';

export const ProtectedRoute: FC<RouteProps> = ({ redirectPath, children }) => {
  const isLoggedIn = getIsLoggedIn();

  return isLoggedIn ? children : <Navigate to={redirectPath} replace />;
};
