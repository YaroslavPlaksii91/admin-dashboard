import { FC } from 'react';
import { Box } from '@mui/material';

import { Pagination } from '@components/Pagination/Pagination';
import { ActionButtons } from '@components/ActionButtons/ActionButtons';

import { TicketsItem } from './components/TicketsItem/TicketsItem';
import { Heading } from './components/Heading/Heading';
import { useTickets } from './useTickets';

export const Tickets: FC = () => {
  const {
    getCurrentPageTickets,
    page,
    setPage,
    onAddClick,
    onFilterClick,
    onSortClick,
    ticketsCount,
  } = useTickets();

  return (
    <Box
      sx={{
        height: '100%',
        pt: '37px',
        border: '1px solid',
        borderColor: 'borderColor',
        borderRadius: '8px',
        backgroundColor: 'mainWhiteColor',
      }}
    >
      <ActionButtons
        addButtonName="Add ticket"
        onAddClick={onAddClick}
        onFilterClick={onFilterClick}
        onSortClick={onSortClick}
      />

      <Heading />

      {getCurrentPageTickets().map(ticket => (
        <TicketsItem ticket={ticket} key={ticket.id} />
      ))}

      <Pagination count={ticketsCount} page={page} setPage={setPage} />
    </Box>
  );
};
