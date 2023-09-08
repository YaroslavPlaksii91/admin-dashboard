import { FC } from 'react';
import { Typography } from '@mui/material';

import { ROUTES } from '@routes/constants';
import { Link } from '@components/Link/Link';

import styles from './SignUpMessage.module.css';

export const SignUpMessage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Typography
        variant="body1"
        sx={{ fontSize: 14, lineHeight: 1.43, color: 'secondaryTextColor' }}
      >
        Don't have an account?
      </Typography>
      <Link url={ROUTES.REGISTER_PAGE}>Sign up</Link>
    </div>
  );
};
