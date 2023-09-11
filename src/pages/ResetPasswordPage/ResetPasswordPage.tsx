import { FC } from 'react';
import { Typography } from '@mui/material';

import { AuthMain } from '@components/AuthMain/AuthMain';
import { AuthContainer } from '@components/AuthContainer/AuthContainer';
import { ResetPasswordForm } from './ResetPasswordForm/ResetPasswordForm';
import { SignUpMessage } from '@components/SignUpMessage/SignUpMessage';

export const ResetPasswordPage: FC = () => {
  return (
    <AuthMain>
      <AuthContainer>
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
      </AuthContainer>
    </AuthMain>
  );
};
