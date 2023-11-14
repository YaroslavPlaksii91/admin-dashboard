import { FC } from 'react';
import { List, ListItem, Typography } from '@mui/material';

import { SummaryProps } from './types';

export const Summary: FC<SummaryProps> = ({ data }) => {
  return (
    <List sx={{ display: 'flex', gap: '30px', mb: '30px' }}>
      {data.map(item => (
        <ListItem
          key={item.label}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '24px 32px',
            border: '1px solid',
            borderColor: 'borderColor',
            borderRadius: '8px',
            color: 'secondaryTextColor',
            backgroundColor: 'mainWhiteColor',
            transition: 'color 250ms ease, border-color 250ms ease',
            '&:hover': {
              color: 'accentBlueColor',
              borderColor: 'accentBlueColor',
              cursor: 'pointer',
              span: {
                color: 'accentBlueColor',
              },
            },
          }}
        >
          <Typography variant="h3" sx={{ mb: '12px' }}>
            {item.label}
          </Typography>
          <Typography
            component="span"
            sx={{
              fontSize: '40px',
              fontWeight: 700,
              letterSpacing: '1px',
              color: 'mainTextColor',
              transition: 'color 250ms ease',
            }}
          >
            {item.count}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};
