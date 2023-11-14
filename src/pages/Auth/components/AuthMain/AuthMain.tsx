import { FC } from 'react';

import { AuthMainProps } from './types';

import styles from './AuthMain.module.css';

export const AuthMain: FC<AuthMainProps> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};
