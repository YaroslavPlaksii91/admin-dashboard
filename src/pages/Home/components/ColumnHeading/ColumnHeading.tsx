import { FC } from 'react';
import { Grid } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

import { ColumnHeadingProps } from './types';

export const ColumnHeading: FC<ColumnHeadingProps> = ({
  onClick,
  size,
  name,
  title,
  sortKey,
  sortDirection,
}) => {
  return (
    <Grid item xs={size} onClick={onClick}>
      {title}{' '}
      {sortKey === name &&
        (sortDirection === 'asc' ? (
          <NorthIcon fontSize="small" sx={{ verticalAlign: 'top' }} />
        ) : (
          <SouthIcon fontSize="small" sx={{ verticalAlign: 'top' }} />
        ))}
    </Grid>
  );
};
