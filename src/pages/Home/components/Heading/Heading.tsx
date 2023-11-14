import { FC } from 'react';
import { Grid } from '@mui/material';

import { ColumnHeading } from '@pages/Home/components/ColumnHeading/ColumnHeading';

import { HeadingProps } from './types';

export const Heading: FC<HeadingProps> = ({
  handleSort,
  sortKey,
  sortDirection,
  columns,
}) => {
  return (
    <Grid
      container
      sx={{
        padding: '0 32px 12px',
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 1.3,
        letterSpacing: 0.2,
        color: 'secondaryTextColor',
        borderBottom: '2px solid',
        borderBottomColor: 'borderColor',
        cursor: 'pointer',
      }}
    >
      {columns.map(col => (
        <ColumnHeading
          key={col.name}
          size={col.size}
          onClick={() => handleSort(col.name)}
          name={col.name}
          title={col.title}
          sortKey={sortKey}
          sortDirection={sortDirection}
        />
      ))}
    </Grid>
  );
};
