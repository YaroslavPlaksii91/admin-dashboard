import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// import { isLoggedIn } from '@services/localeStorage/localeStorage';
import { useAuthStore } from '@store/auth';

import { RouteProps } from './types';

export const PublicRoute: FC<RouteProps> = observer(
  ({ redirectPath, children }) => {
    const authStore = useAuthStore();

    return authStore.isLoggedIn ? (
      <Navigate to={redirectPath} replace />
    ) : (
      children
    );
  },
);
