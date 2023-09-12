import { FC } from 'react';
import { Typography } from '@mui/material';

import { ROUTES } from '@routes/constants';
import { AuthMain } from '@components/AuthMain/AuthMain';
import { AuthContainer } from '@components/AuthContainer/AuthContainer';
import { SignUpMessage } from '@components/SignUpMessage/SignUpMessage';
import { Link } from '@components/Link/Link';

import { LoginForm } from './LoginForm/LoginForm';

import styles from './LoginPage.module.css';

export const LoginPage: FC = () => {
  return (
    <AuthMain>
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

        <span className={styles.link}>
          <Link url={ROUTES.FORGOT_PASSWORD_PAGE}>Forgot password?</Link>
        </span>

        <SignUpMessage />
      </AuthContainer>
    </AuthMain>
  );
};
