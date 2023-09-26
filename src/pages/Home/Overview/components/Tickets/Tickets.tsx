import { FC } from 'react';
import { List, ListItem, Typography, Box } from '@mui/material';

import { Link } from '@components/Link/Link';

import { TicketsProps } from './types';

export const Tickets: FC<TicketsProps> = ({ data }) => {
  return (
    <Box
      sx={{
        width: '50%',
        padding: '32px 0 8px',
        border: '1px solid',
        borderColor: 'borderColor',
        borderRadius: '8px',
        backgroundColor: 'mainWhiteColor',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: '8px',
          padding: '0 32px',
        }}
      >
        <Typography variant="h3">Unresolved tickets</Typography>
        <Link url="#">View details</Link>
      </Box>

      <Typography
        sx={{
          fontSize: '12px',
          lineHeight: 1.3,
          letterSpacing: 0.1,
          mb: 4,
          padding: '0 32px',
          color: 'secondaryTextColor',
        }}
      >
        Group:{' '}
        <Typography
          component="span"
          sx={{
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: 1.3,
            letterSpacing: 0.1,
            color: 'grayDarkColor',
          }}
        >
          Support
        </Typography>
      </Typography>

      <List>
        {data.map(item => (
          <ListItem
            key={item.title}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px 32px 18px',
              '&:not(:last-child)': {
                borderBottom: '1px solid',
                borderBottomColor: 'borderColor',
              },
            }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: 0.2,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: 0.2,
                color: 'secondaryTextColor',
              }}
            >
              {item.count}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
