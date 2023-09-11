import { FC } from 'react';
import { Typography } from '@mui/material';

import { AuthContainer } from '@components/AuthContainer/AuthContainer';
import { SignUpMessage } from '@components/SignUpMessage/SignUpMessage';
import { LoginForm } from './LoginForm/LoginForm';

import styles from './LoginPage.module.css';

export const LoginPage: FC = () => {
  return (
    <main className={styles.main}>
      <AuthContainer>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Log In to Dashboard Kit
        </Typography>

        <Typography
          variant="subtitle1"
          component="p"
          sx={{ color: 'secondaryTextColor', mb: 12 }}
        >
          Enter your email and password
        </Typography>

        <LoginForm />

        <SignUpMessage />
      </AuthContainer>
    </main>
  );
};
