import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { getIsLoggedIn } from '@services/localeStorage/localeStorage';

import { RouteProps } from './types';

export const PublicRoute: FC<RouteProps> = ({ redirectPath, children }) => {
  const isLoggedIn = getIsLoggedIn();

  return isLoggedIn ? <Navigate to={redirectPath} replace /> : children;
};
