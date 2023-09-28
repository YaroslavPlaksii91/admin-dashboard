import { FC, useState, useEffect } from 'react';
import { Box } from '@mui/material';

import { Pagination } from '@components/Pagination/Pagination';
import { usePagination } from '@components/Pagination/usePagination';
import { ModalComponent } from '@components/Modal/Modal';
import { getContacts } from '@services/db/getContacts';
import { formatCurrentDate } from '@services/date/formatCurrentDate';

import { ContactType } from './ContactsItem/types';
import { ContactsItem } from './ContactsItem/ContactsItem';
import { Heading } from './Heading/Heading';
import { AddContacts } from './AddContacts/AddContacts';
import { AddContactsData } from './AddContacts/types';
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

  const handleAddContact = ({
    firstName,
    lastName,
    email,
    address,
    photo,
  }: AddContactsData) => {
    const currentDate = formatCurrentDate().split(' ').slice(0, 3).join(' ');
    const newContact = {
      id: contacts.length + 1,
      name: `${firstName} ${lastName}`,
      email,
      address,
      created: currentDate,
      image: URL.createObjectURL(photo[0]),
    };

    setContacts([newContact, ...contacts]);

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
        title="Add new contact"
        onClose={() => setIsModalOpen(false)}
      >
        <AddContacts addContact={handleAddContact} />
      </ModalComponent>
    </Box>
  );
};
