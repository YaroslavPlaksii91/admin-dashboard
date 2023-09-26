import { FC } from 'react';
import { List, ListItem, Typography, Box } from '@mui/material';

import { StatisticsProps } from './types';

export const Statistics: FC<StatisticsProps> = ({ data }) => {
  return (
    <Box
      sx={{
        width: '342px',
        padding: '8px 0',
        borderLeft: '1px solid',
        borderColor: 'borderColor',
      }}
    >
      <List>
        {data.map(item => (
          <ListItem
            key={item.section}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '24px 0',
              '&:not(:last-child)': {
                borderBottom: '1px solid',
                borderBottomColor: 'borderColor',
              },
            }}
          >
            <Typography
              component="p"
              sx={{
                fontWeight: 600,
                lineHeight: 1.38,
                letterSpacing: 0.3,
                mb: '6px',
                color: 'secondaryTextColor',
              }}
            >
              {item.section}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: '24px',
                fontWeight: 700,
                letterSpacing: 0.3,
                lineHeight: 1.3,
              }}
            >
              {item.value}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
