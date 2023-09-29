import { FC, useState, useEffect } from 'react';
import { Box } from '@mui/material';

import { Pagination } from '@components/Pagination/Pagination';
import { usePagination } from '@components/Pagination/usePagination';
import { ModalComponent } from '@components/Modal/Modal';
import { getTickets } from '@services/db/getTickets';
import { formatCurrentDate } from '@services/date/formatCurrentDate';
import { formatCustomerDate } from '@services/date/formatCustomerDate';

import { TicketsItem } from './components/TicketsItem/TicketsItem';
import { TicketType } from './components/TicketsItem/types';
import { Heading } from './components/Heading/Heading';
import { AddTickets } from './components/AddTickets/AddTickets';
import { AddTicketsData } from './components/AddTickets/types';
import { ActionButtons } from '../components/ActionButtons/ActionButtons';

export const Tickets: FC = () => {
  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { getCurrentPageData, page, setPage, rowsPerPage, setRowsPerPage } =
    usePagination(tickets);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTickets();
        setTickets(data);
      } catch (error) {
        console.error('Error while fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleAddTicket = ({
    title,
    date: { $d },
    name,
    priority,
  }: AddTicketsData) => {
    const newTicket = {
      id: tickets.length + 1,
      title,
      customer: {
        name,
        date: formatCustomerDate($d),
      },
      date: formatCurrentDate(),
      priority,
      image: '/tom-cruise',
      updated: formatCurrentDate(),
    };

    setTickets([newTicket, ...tickets]);

    setIsModalOpen(false);
  };

  const onSortClick = () => {
    console.log('Sort');
  };

  const onFilterClick = () => {
    console.log('Filter');
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
        onAddClick={() => setIsModalOpen(true)}
        onFilterClick={onFilterClick}
        onSortClick={onSortClick}
      />

      <Heading />

      {getCurrentPageData().map(ticket => (
        <TicketsItem ticket={ticket} key={ticket.id} />
      ))}

      <Pagination
        count={tickets.length}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />

      <ModalComponent
        isOpen={isModalOpen}
        title="Add tickets"
        onClose={() => setIsModalOpen(false)}
      >
        <AddTickets addTicket={handleAddTicket} />
      </ModalComponent>
    </Box>
  );
};
