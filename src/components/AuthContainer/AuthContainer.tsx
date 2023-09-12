import { FC } from 'react';

import { Logo } from '@components/Logo/Logo';

import { AuthContainerProps } from './types';
import { AUTH_CONTAINER_TEST_ID } from './constants';

import styles from './AuthContainer.module.css';

export const AuthContainer: FC<AuthContainerProps> = ({ children }) => {
  return (
    <section className={styles.wrapper} data-testid={AUTH_CONTAINER_TEST_ID}>
      <Logo />
      {children}
    </section>
  );
};
