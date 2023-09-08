import { FC } from 'react';

import { AuthContainerProps } from './types';
import { AUTH_CONTAINER_TEST_ID } from './constants';
import { Logo } from '@components/Logo/Logo';

import styles from './AuthContainer.module.css';

export const AuthContainer: FC<AuthContainerProps> = ({ children }) => {
  return (
    <div className={styles.wrapper} data-testid={AUTH_CONTAINER_TEST_ID}>
      <Logo />
      {children}
    </div>
  );
};
