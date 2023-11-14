import { FC } from 'react';
import { Typography } from '@mui/material';

import { ResetPasswordForm } from './ResetPasswordForm/ResetPasswordForm';
import { SignUpMessage } from '../components/SignUpMessage/SignUpMessage';

export const ResetPasswordPage: FC = () => {
  return (
    <>
      <Typography variant="h2" sx={{ mb: 3 }}>
        Reset Password
      </Typography>

      <Typography
        variant="subtitle1"
        component="p"
        sx={{ color: 'secondaryTextColor', mb: 12 }}
      >
        Enter new password
      </Typography>

      <ResetPasswordForm />

      <SignUpMessage />
    </>
  );
};
