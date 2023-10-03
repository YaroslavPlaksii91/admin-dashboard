import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { isLoggedIn } from '@services/localeStorage/localeStorage';

import { RouteProps } from './types';

export const PublicRoute: FC<RouteProps> = ({ redirectPath, children }) => {
  return isLoggedIn() ? <Navigate to={redirectPath} replace /> : children;
};
