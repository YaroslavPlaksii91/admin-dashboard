import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { isLoggedIn } from '@services/localeStorage/localeStorage';

import { RouteProps } from './types';

export const ProtectedRoute: FC<RouteProps> = ({ redirectPath, children }) => {
  return isLoggedIn() ? children : <Navigate to={redirectPath} replace />;
};
