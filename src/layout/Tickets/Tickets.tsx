import { FC, useState, useEffect } from 'react';
import { Box } from '@mui/material';

import { Pagination } from '@components/Pagination/Pagination';
import { ActionButtons } from '@components/ActionButtons/ActionButtons';
import { usePagination } from '@components/Pagination/usePagination';
import { getTickets } from '@services/getTickets';

import { TicketsItem } from './components/TicketsItem/TicketsItem';
import { TicketType } from './components/TicketsItem/types';
import { Heading } from './components/Heading/Heading';

export const Tickets: FC = () => {
  const [tickets, setTickets] = useState<TicketType[] | []>([]);

  const { getCurrentPageData, page, setPage, rowsPerPage, setRowsPerPage } =
    usePagination(tickets);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTickets();

      setTickets(data);
    };

    fetchData();
  }, []);

  const onSortClick = () => {
    console.log('Sort');
  };

  const onFilterClick = () => {
    console.log('Filter');
  };

  const onAddClick = () => {
    console.log('Add ticket');
  };

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

      {getCurrentPageData().map((ticket: any) => (
        <TicketsItem ticket={ticket} key={ticket.id} />
      ))}

      <Pagination
        count={tickets.length}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </Box>
  );
};
