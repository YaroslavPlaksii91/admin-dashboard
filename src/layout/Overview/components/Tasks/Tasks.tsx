import { FC } from 'react';
import { List, ListItem, Typography, Box, SvgIcon } from '@mui/material';

import { Link } from '@components/Link/Link';
import { Label } from '@components/Label/Label';
import { LABEL_TYPES } from '@components/Label/constants';
import { CheckboxComponent } from '@components/Checkbox/Checkbox';

import { TasksProps } from './types';

export const Tasks: FC<TasksProps> = ({ data }) => {
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
        <Typography variant="h3">Tasks</Typography>
        <Link url="#">View all</Link>
      </Box>

      <Typography
        sx={{
          fontSize: '12px',
          lineHeight: 1.3,
          letterSpacing: 0.1,
          mb: '30px',
          padding: '0 32px',
          color: 'secondaryTextColor',
        }}
      >
        Today
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 32px',
          mb: '18px',
        }}
      >
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: 1.43,
            letterSpacing: 0.2,
            color: 'additionalInfoColor',
          }}
        >
          Create new task
        </Typography>
        <SvgIcon titleAccess="Add new task" sx={{ cursor: 'pointer' }}>
          <use href="/src/assets/icons/sprite.svg#icon-create"></use>
        </SvgIcon>
      </Box>

      <List>
        {data.map(item => (
          <ListItem
            key={item.title}
            sx={{
              justifyContent: 'space-between',
              padding: '16px 32px',
              borderTop: '1px solid',
              borderTopColor: 'borderColor',
            }}
          >
            <Box sx={{ display: 'flex', gap: 4 }}>
              <CheckboxComponent />

              <Typography variant="subtitle2" component="p">
                {item.title}
              </Typography>
            </Box>

            <Label
              text={item.priority}
              type={LABEL_TYPES.SQUARE}
              color={item.priority}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
