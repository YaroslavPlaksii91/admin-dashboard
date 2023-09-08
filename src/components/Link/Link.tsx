import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { LinkProps } from './types';

import styles from './Link.module.css';

export const Link: FC<LinkProps> = ({ url, children }) => {
  return (
    <RouterLink to={url} className={styles.link}>
      {children}
    </RouterLink>
  );
};
