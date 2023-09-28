import { FC } from 'react';
import { Grid } from '@mui/material';

export const Heading: FC = () => {
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
      }}
    >
      <Grid item xs={4}>
        Name
      </Grid>
      <Grid item xs={3}>
        Email
      </Grid>
      <Grid item xs={3}>
        Address
      </Grid>
      <Grid item xs={2}>
        Created at
      </Grid>
    </Grid>
  );
};
