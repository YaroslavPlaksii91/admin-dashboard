import { FC } from 'react';
import { Typography, SvgIcon } from '@mui/material';
import classNames from 'classnames';

import { LOGO_TYPES } from './constants';
import { LogoProps } from './types';
import { Link } from '@components/Link/Link';

import styles from './Logo.module.css';

export const Logo: FC<LogoProps> = ({ type = LOGO_TYPES.VERTICAL }) => {
  const wrapperClassName = classNames({
    [styles.wrapperVertical]: Boolean(type === LOGO_TYPES.VERTICAL),
    [styles.wrapperHorizontal]: Boolean(type === LOGO_TYPES.HORIZONTAL),
  });

  const iconClassName = classNames({
    [styles.iconVertical]: Boolean(type === LOGO_TYPES.VERTICAL),
    [styles.iconHorizontal]: Boolean(type === LOGO_TYPES.HORIZONTAL),
  });

  return (
    <Link url="/">
      <div className={wrapperClassName}>
        <SvgIcon titleAccess="Logo" className={iconClassName}>
          <use href="/src/assets/icons/sprite.svg#icon-logo"></use>
        </SvgIcon>
        <Typography
          variant="h3"
          component="p"
          sx={{ opacity: 0.7 }}
          className={styles.text}
        >
          Dashboard Kit
        </Typography>
      </div>
    </Link>
  );
};
