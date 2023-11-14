import { FC } from 'react';
import classNames from 'classnames';

import { LabelProps } from './types';

import styles from './Label.module.css';

export const Label: FC<LabelProps> = ({ type, color, text }) => {
  const labelClassNames = classNames(styles.label, {
    [styles[type]]: type,
    [styles[color]]: color,
  });

  return <span className={labelClassNames}>{text}</span>;
};
