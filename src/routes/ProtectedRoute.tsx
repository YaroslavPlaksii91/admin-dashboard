import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { authStore } from '@store/auth';

import { RouteProps } from './types';

export const ProtectedRoute: FC<RouteProps> = observer(
  ({ redirectPath, children }) => {
    return authStore.isLoggedIn ? (
      children
    ) : (
      <Navigate to={redirectPath} replace />
    );
  },
);
