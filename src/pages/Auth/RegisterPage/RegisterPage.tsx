import { FC } from 'react';
import { Typography } from '@mui/material';

import { RegisterForm } from './RegisterForm/RegisterForm';

export const RegisterPage: FC = () => {
  return (
    <>
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
    </>
  );
};
