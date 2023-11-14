import { FC, useState } from 'react';
import { Typography } from '@mui/material';

import { ForgotPasswordForm } from './ForgotPasswordForm/ForgotPasswordForm';
import { SignUpMessage } from '../components/SignUpMessage/SignUpMessage';

export const ForgotPasswordPage: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <Typography variant="h2" sx={{ mb: 3 }}>
        Forgot password?
      </Typography>

      <Typography
        variant="subtitle1"
        component="p"
        sx={{ color: 'secondaryTextColor', mb: 12 }}
      >
        {isSubmitted
          ? 'Link to change your password has been sent to provided email if we have it inside our system'
          : 'Enter your email from registered account'}
      </Typography>

      {!isSubmitted && (
        <>
          <ForgotPasswordForm setIsSubmitted={setIsSubmitted} />
          <SignUpMessage />
        </>
      )}
    </>
  );
};
