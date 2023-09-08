import { FC } from 'react';
import { Typography, Button } from '@mui/material';

import { AuthContainer } from '@components/AuthContainer/AuthContainer';
import { SignUpMessage } from '@components/SignUpMessage/SignUpMessage';

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
        <Button
          variant="contained"
          fullWidth
          sx={{
            height: 48,
            mb: 8,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: 1.43,
            letterSpacing: 0.2,
            textTransform: 'none',
            borderRadius: 2,
            backgroundColor: 'accentBlueColor',
            boxShadow: '0px 4px 12px 0px rgba(55, 81, 255, 0.24)',
          }}
        >
          Log In
        </Button>
        <SignUpMessage />
      </AuthContainer>
    </main>
  );
};
