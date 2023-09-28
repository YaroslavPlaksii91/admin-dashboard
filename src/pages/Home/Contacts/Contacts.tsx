import { FC, useState, useEffect } from 'react';
import { Box } from '@mui/material';

import { Pagination } from '@components/Pagination/Pagination';
import { usePagination } from '@components/Pagination/usePagination';
import { ModalComponent } from '@components/Modal/Modal';
import { getContacts } from '@services/db/getContacts';

import { ContactType } from './ContactsItem/types';
import { ContactsItem } from './ContactsItem/ContactsItem';
import { Heading } from './Heading/Heading';
import { ActionButtons } from '../components/ActionButtons/ActionButtons';

export const Contacts: FC = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { getCurrentPageData, page, setPage, rowsPerPage, setRowsPerPage } =
    usePagination(contacts);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getContacts();

      setContacts(data);
    };

    fetchData();
  }, []);

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
        addButtonName="Add contact"
        onAddClick={() => setIsModalOpen(true)}
        onFilterClick={onFilterClick}
        onSortClick={onSortClick}
      />

      <Heading />

      {getCurrentPageData().map(contact => (
        <ContactsItem contact={contact} key={contact.id} />
      ))}

      <Pagination
        count={contacts.length}
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
        voluptates accusamus, quidem dignissimos eum distinctio similique esse
        reprehenderit, sunt explicabo officiis. Adipisci quas debitis in modi
        nihil dolorum voluptate saepe.
      </ModalComponent>
    </Box>
  );
};
