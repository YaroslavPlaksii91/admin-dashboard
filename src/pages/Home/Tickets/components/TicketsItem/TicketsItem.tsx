import { FC } from 'react';
import { Grid, Button, SvgIcon, Box } from '@mui/material';

import { Label } from '@components/Label/Label';
import { LABEL_TYPES } from '@components/Label/constants';
import { getTicketUpdateTime } from '@pages/Home/Tickets/helpers/getTicketUpdateTime';
import { formatCustomerDate } from '@pages/Home/Tickets/helpers/formatCustomerDate';
import { formatDate } from '@services/date/formatDate';

import { TicketsItemProps } from './types';
import { TextCell } from '../TextCell/TextCell';

export const TicketsItem: FC<TicketsItemProps> = ({ ticket }) => {
  const updatedTime = getTicketUpdateTime(ticket.updated);
  const customerDate = formatCustomerDate(ticket.customerDate);
  const date = formatDate(ticket.date);

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
      <Grid item xs={5} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            width: '44px',
            height: '44px',
            mr: 6,
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <img src={ticket.image} alt={ticket.customerName} />
        </Box>

        <TextCell text={ticket.title} subtext={updatedTime} />
      </Grid>
      <Grid item xs={3}>
        <TextCell text={ticket.customerName} subtext={`on ${customerDate}`} />
      </Grid>
      <Grid item xs={2}>
        <TextCell text={date.date} subtext={date.time} />
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
