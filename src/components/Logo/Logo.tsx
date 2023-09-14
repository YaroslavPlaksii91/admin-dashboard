import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Typography, SvgIcon } from '@mui/material';
import classNames from 'classnames';

import { ROUTES } from '@routes/constants';

import { LOGO_TYPES } from './constants';
import { LogoProps } from './types';

import styles from './Logo.module.css';

export const Logo: FC<LogoProps> = ({ type = LOGO_TYPES.VERTICAL }) => {
  const wrapperClassName = classNames({
    [styles.wrapperVertical]: type === LOGO_TYPES.VERTICAL,
    [styles.wrapperHorizontal]: type === LOGO_TYPES.HORIZONTAL,
  });

  const iconClassName = classNames({
    [styles.iconVertical]: type === LOGO_TYPES.VERTICAL,
    [styles.iconHorizontal]: type === LOGO_TYPES.HORIZONTAL,
  });

  return (
    <div className={wrapperClassName}>
      <Link to={ROUTES.HOME_PAGE} className={styles.link}>
        <SvgIcon titleAccess="Logo" className={iconClassName}>
          <use href="/src/assets/icons/sprite.svg#icon-logo"></use>
        </SvgIcon>
        <Typography
          variant="h3"
          component="p"
          sx={{ opacity: 0.7, color: 'grayLightColor' }}
        >
          Dashboard Kit
        </Typography>
      </Link>
    </div>
  );
};
