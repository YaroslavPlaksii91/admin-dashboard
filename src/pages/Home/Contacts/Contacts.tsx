import { FC, useState, useEffect } from 'react';
import { Box } from '@mui/material';

import { Pagination } from '@components/Pagination/Pagination';
import { usePagination } from '@components/Pagination/usePagination';
import { ModalComponent } from '@components/Modal/Modal';
import {
  getContacts,
  createContact,
  deleteContact,
  editContact,
} from '@services/db/contacts';
import { formatDate } from '@services/date/formatDate';
import { useSort } from '@hooks/useSort';
import { useFilter } from '@hooks/useFilter';

import { ContactType } from './components/ContactsItem/types';
import { ContactsItem } from './components/ContactsItem/ContactsItem';
import { ContactsForm } from './components/ContactsForm/ContactsForm';
import { AddContactsData } from './components/ContactsForm/types';
import { CONTACTS_COLUMNS } from './constants';
import { Heading } from '../components/Heading/Heading';
import { ActionButtons } from '../components/ActionButtons/ActionButtons';

export const Contacts: FC = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [activeContactId, setActiveContactId] = useState('');

  const filteredData = useFilter(contacts, filterValue, 'date');

  const { sortedData, handleSort, sortKey, sortDirection } =
    useSort(filteredData);

  const { getCurrentPageData, page, setPage, rowsPerPage, setRowsPerPage } =
    usePagination(sortedData);

  const sortOptions = CONTACTS_COLUMNS.map(col => col.name);

  const filterOptions = Array.from(
    new Set(
      contacts.map(contact => {
        const formattedDate = formatDate(contact.date);
        return formattedDate.date;
      }),
    ),
  );

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

  const onAddButtonClick = () => {
    setActiveContactId('');
    setIsModalOpen(true);
  };

  const onEditButtonClick = (id: string) => {
    setIsModalOpen(true);
    setActiveContactId(id);
  };

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

  const handleEditContact = async ({
    firstName,
    lastName,
    email,
    address,
    photo,
    date,
  }: AddContactsData) => {
    const body = {
      name: `${firstName} ${lastName}`,
      email,
      address,
      date,
      image: URL.createObjectURL(photo[0]),
    };

    const updatedContact = await editContact(activeContactId, body);

    const newContacts = contacts.map(contact =>
      contact.id === activeContactId ? updatedContact : contact,
    );

    setContacts([...newContacts]);

    setIsModalOpen(false);
  };

  const handleDeleteContact = async (id: string) => {
    await deleteContact(id);

    setContacts([...contacts.filter(contact => contact.id !== id)]);
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
        onAddClick={onAddButtonClick}
        handleSort={handleSort}
        sortOptions={sortOptions}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        filterTitle="Date"
        filterOptions={filterOptions}
      />

      <Heading
        handleSort={handleSort}
        sortKey={sortKey}
        sortDirection={sortDirection}
        columns={CONTACTS_COLUMNS}
      />

      {getCurrentPageData().map(contact => (
        <ContactsItem
          key={contact.id}
          contact={contact}
          handleDelete={() => handleDeleteContact(contact.id)}
          handleEdit={() => onEditButtonClick(contact.id)}
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
        title="Add new contact"
        onClose={() => setIsModalOpen(false)}
      >
        <ContactsForm
          addContact={handleAddContact}
          editContact={handleEditContact}
          activeContact={contacts.find(
            contact => contact.id === activeContactId,
          )}
        />
      </ModalComponent>
    </Box>
  );
};
