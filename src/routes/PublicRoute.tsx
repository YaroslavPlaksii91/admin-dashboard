import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { authStore } from '@store/auth';

import { RouteProps } from './types';

export const PublicRoute: FC<RouteProps> = observer(
  ({ redirectPath, children }) => {
    return authStore.isLoggedIn ? (
      <Navigate to={redirectPath} replace />
    ) : (
      children
    );
  },
);
