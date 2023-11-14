import { FC, useState, useEffect } from 'react';
import { Box } from '@mui/material';

import { Pagination } from '@components/Pagination/Pagination';
import { usePagination } from '@components/Pagination/usePagination';
import { ModalComponent } from '@components/Modal/Modal';
import {
  getTickets,
  createTicket,
  deleteTicket,
  editTicket,
} from '@services/db/tickets';
import { useSort } from '@hooks/useSort';
import { useFilter } from '@hooks/useFilter';

import { TicketsItem } from './components/TicketsItem/TicketsItem';
import { TicketType } from './components/TicketsItem/types';
import { TicketsForm } from './components/TicketsForm/TicketsForm';
import { TicketsFormData } from './components/TicketsForm/types';
import { TICKETS_COLUMNS } from './constants';
import { Heading } from '../components/Heading/Heading';
import { ActionButtons } from '../components/ActionButtons/ActionButtons';

export const Tickets: FC = () => {
  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [activeTicketId, setActiveTicketId] = useState('');

  const filteredData = useFilter(tickets, filterValue, 'priority');

  const { sortedData, handleSort, sortKey, sortDirection } =
    useSort(filteredData);

  const { getCurrentPageData, page, setPage, rowsPerPage, setRowsPerPage } =
    usePagination(sortedData);

  const sortOptions = TICKETS_COLUMNS.map(col => col.name);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTickets();
        data && setTickets(data);
      } catch (error) {
        console.error('Error while fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const onAddButtonClick = () => {
    setActiveTicketId('');
    setIsModalOpen(true);
  };

  const onEditButtonClick = (id: string) => {
    setIsModalOpen(true);
    setActiveTicketId(id);
  };

  const handleAddTicket = async ({
    title,
    date: { $d },
    name,
    priority,
  }: TicketsFormData) => {
    const newTicket = {
      id: String(tickets.length + 1),
      title,
      customerName: name,
      customerDate: new Date().toISOString(),
      date: new Date($d).toISOString(),
      priority,
      image:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/574.jpg',
      updated: new Date().toISOString(),
    };

    const createdTicket = await createTicket(newTicket);

    setTickets([createdTicket, ...tickets]);

    setIsModalOpen(false);
  };

  const handleEditTicket = async ({
    title,
    date: { $d },
    name,
    priority,
  }: TicketsFormData) => {
    const body = {
      title,
      customerName: name,
      customerDate: new Date().toISOString(),
      date: new Date($d).toISOString(),
      priority,
      image:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/574.jpg',
      updated: new Date().toISOString(),
    };

    const updatedTicket = await editTicket(activeTicketId, body);

    const newTickets = tickets.map(ticket =>
      ticket.id === activeTicketId ? updatedTicket : ticket,
    );

    setTickets([...newTickets]);

    setIsModalOpen(false);
  };

  const handleDeleteTicket = async (id: string) => {
    await deleteTicket(id);

    setTickets([...tickets.filter(ticket => ticket.id !== id)]);
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
        onAddClick={onAddButtonClick}
        handleSort={handleSort}
        sortOptions={sortOptions}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        filterTitle="Priority"
        filterOptions={['high', 'normal', 'low']}
      />

      <Heading
        handleSort={handleSort}
        sortKey={sortKey}
        sortDirection={sortDirection}
        columns={TICKETS_COLUMNS}
      />

      {getCurrentPageData().map(ticket => (
        <TicketsItem
          ticket={ticket}
          key={ticket.id}
          handleDelete={() => handleDeleteTicket(ticket.id)}
          handleEdit={() => onEditButtonClick(ticket.id)}
        />
      ))}

      <Pagination
        count={filteredData.length}
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
        <TicketsForm
          addTicket={handleAddTicket}
          editTicket={handleEditTicket}
          activeTicket={tickets.find(ticket => ticket.id === activeTicketId)}
        />
      </ModalComponent>
    </Box>
  );
};
