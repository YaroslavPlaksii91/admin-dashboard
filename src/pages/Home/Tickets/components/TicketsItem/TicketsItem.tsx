import { FC } from 'react';
import { Grid, Button, SvgIcon, Box } from '@mui/material';

import { Label } from '@components/Label/Label';
import { LABEL_TYPES } from '@components/Label/constants';
import { getTicketUpdateTime } from '@services/date/getTicketUpdateTime';

import { TicketsItemProps } from './types';
import { TextCell } from '../TextCell/TextCell';

export const TicketsItem: FC<TicketsItemProps> = ({ ticket }) => {
  const dateTimeParts = ticket.date.split(' ');
  const datePart = dateTimeParts.slice(0, 3).join(' ');
  const timePart = dateTimeParts.slice(3).join(' ');
  const updatedTime = getTicketUpdateTime(ticket.updated);

  return (
    <Grid
      container
      sx={{
        padding: '24px 32px',
        borderBottom: '1px solid',
        borderBottomColor: 'borderColor',
        transition: 'background-color 250ms ease',
        '&:hover': {
          backgroundColor: 'rgba(55, 81, 255, 0.04)',
          cursor: 'pointer',
        },
      }}
    >
      <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            width: '44px',
            height: '44px',
            mr: 6,
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <img
            src={`/src/assets/images/users/${ticket.image}.png`}
            alt={ticket.customer.name}
          />
        </Box>

        <TextCell text={ticket.title} subtext={updatedTime} />
      </Grid>
      <Grid item xs={3}>
        <TextCell
          text={ticket.customer.name}
          subtext={`on ${ticket.customer.date}`}
        />
      </Grid>
      <Grid item xs={3}>
        <TextCell text={datePart} subtext={timePart} />
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Label
          text={ticket.priority}
          color={ticket.priority}
          type={LABEL_TYPES.ROUND}
        />
        <Button>
          <SvgIcon titleAccess="More options">
            <use href="/src/assets/icons/sprite.svg#icon-more"></use>
          </SvgIcon>
        </Button>
      </Grid>
    </Grid>
  );
};
