import { useState, useEffect } from 'react';

import { getTickets } from '@services/getTickets';
import { ROWS_PER_PAGE } from '@components/Pagination/constants';

import { TicketType } from './components/TicketsItem/types';

export const useTickets = () => {
  const [tickets, setTickets] = useState<TicketType[] | []>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTickets();

      setTickets(data);
    };

    fetchData();
  }, []);

  const getCurrentPageTickets = () => {
    const startIndex = page * ROWS_PER_PAGE;
    const endIndex = startIndex + ROWS_PER_PAGE;

    return tickets.slice(startIndex, endIndex);
  };

  const ticketsCount = tickets.length;

  const onSortClick = () => {
    console.log('Sort');
  };

  const onFilterClick = () => {
    console.log('Filter');
  };

  const onAddClick = () => {
    console.log('Add ticket');
  };

  return {
    getCurrentPageTickets,
    page,
    setPage,
    onSortClick,
    onFilterClick,
    onAddClick,
    ticketsCount,
  };
};
