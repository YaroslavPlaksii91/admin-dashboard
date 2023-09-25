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
        Ticket details
      </Grid>
      <Grid item xs={3}>
        Customer name
      </Grid>
      <Grid item xs={3}>
        Date
      </Grid>
      <Grid item xs={2}>
        Priority
      </Grid>
    </Grid>
  );
};
