import { FC } from 'react';
import { Typography } from '@mui/material';

import { AuthMain } from '@components/AuthMain/AuthMain';
import { AuthContainer } from '@components/AuthContainer/AuthContainer';
import { RegisterForm } from './RegisterForm/RegisterForm';

export const RegisterPage: FC = () => {
  return (
    <AuthMain>
      <AuthContainer>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Sign Up
        </Typography>

        <Typography
          variant="subtitle1"
          component="p"
          sx={{ color: 'secondaryTextColor', mb: 12 }}
        >
          Create a new account
        </Typography>

        <RegisterForm />
      </AuthContainer>
    </AuthMain>
  );
};
