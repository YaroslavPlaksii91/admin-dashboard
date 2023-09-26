import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthMain } from './components/AuthMain/AuthMain';
import { AuthContainer } from './components/AuthContainer/AuthContainer';

export const Auth: FC = () => {
  return (
    <AuthMain>
      <AuthContainer>
        <Outlet />
      </AuthContainer>
    </AuthMain>
  );
};
