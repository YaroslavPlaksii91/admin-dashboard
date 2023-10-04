import axios from 'axios';

import { ContactType } from '@pages/Home/Contacts/components/ContactsItem/types';

export const getContacts = async () => {
  try {
    const { data } = await axios<ContactType[]>(
      'https://651bfe75194f77f2a5af33c3.mockapi.io/api/contacts',
    );

    return data;
  } catch (error) {
    console.error('Error while fetching data: ', error);
  }
};

export const createContact = async (newContact: ContactType) => {
  try {
    const { data } = await axios.post(
      'https://651bfe75194f77f2a5af33c3.mockapi.io/api/contacts',
      newContact,
    );

    return data;
  } catch (error) {
    console.error('Error while creating a new contact: ', error);
  }
};
