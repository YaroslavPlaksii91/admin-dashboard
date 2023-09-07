import { FC } from 'react';

import { ROUTES } from '../../routes/constants';
import { Link } from '..';

import styles from './SignUpMessage.module.css';

export const SignUpMessage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Don't have an account?</p>
      <Link text="Sign up" url={ROUTES.REGISTER_PAGE} />
    </div>
  );
};
