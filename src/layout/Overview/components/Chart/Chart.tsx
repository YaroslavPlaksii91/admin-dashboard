import { FC } from 'react';
import { List, ListItem, Typography, Box } from '@mui/material';

import { ChartProps } from './types';

export const Chart: FC<ChartProps> = ({ data }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        mb: '30px',
        backgroundColor: 'mainWhiteColor',
        border: '1px solid',
        borderColor: 'borderColor',
        borderRadius: '8px',
      }}
    >
      <Box sx={{ flexGrow: 1, padding: '32px' }}>
        <Typography variant="h3">Today's trends</Typography>
      </Box>
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
    </Box>
  );
};
