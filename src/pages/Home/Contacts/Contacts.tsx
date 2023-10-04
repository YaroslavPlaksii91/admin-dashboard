import { FC, useState, useEffect } from 'react';
import { Box } from '@mui/material';

import { Pagination } from '@components/Pagination/Pagination';
import { usePagination } from '@components/Pagination/usePagination';
import { ModalComponent } from '@components/Modal/Modal';
import { getContacts, createContact } from '@services/db/contacts';
import { useSort } from '@hooks/useSort';
import { useFilter } from '@hooks/useFilter';

import { ContactType } from './components/ContactsItem/types';
import { ContactsItem } from './components/ContactsItem/ContactsItem';
import { AddContacts } from './components/AddContacts/AddContacts';
import { AddContactsData } from './components/AddContacts/types';
import { CONTACTS_COLUMNS } from './constants';
import { Heading } from '../components/Heading/Heading';
import { ActionButtons } from '../components/ActionButtons/ActionButtons';

export const Contacts: FC = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterValue, setFilterValue] = useState('');

  const filteredData = useFilter(contacts, filterValue, 'date');

  const { sortedData, handleSort, sortKey, sortDirection } =
    useSort(filteredData);

  const { getCurrentPageData, page, setPage, rowsPerPage, setRowsPerPage } =
    usePagination(sortedData);

  const sortOptions = CONTACTS_COLUMNS.map(col => col.name);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContacts();

        data && setContacts(data);
      } catch (error) {
        console.error('Error while fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleAddContact = async ({
    firstName,
    lastName,
    email,
    address,
    photo,
  }: AddContactsData) => {
    const newContact = {
      id: String(contacts.length + 1),
      name: `${firstName} ${lastName}`,
      email,
      address,
      date: new Date().toISOString(),
      image: URL.createObjectURL(photo[0]),
    };

    const createdContact = await createContact(newContact);

    setContacts([createdContact, ...contacts]);

    setIsModalOpen(false);
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
        handleSort={handleSort}
        sortOptions={sortOptions}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        filterTitle="Date"
        filterOptions={['Oct 4, 2023', 'Oct 3, 2023', 'Oct 2, 2023']}
      />

      <Heading
        handleSort={handleSort}
        sortKey={sortKey}
        sortDirection={sortDirection}
        columns={CONTACTS_COLUMNS}
      />

      {getCurrentPageData().map(contact => (
        <ContactsItem contact={contact} key={contact.id} />
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
        title="Add new contact"
        onClose={() => setIsModalOpen(false)}
      >
        <AddContacts addContact={handleAddContact} />
      </ModalComponent>
    </Box>
  );
};
