import { axiosInstance } from '@services/axios/axiosInstance';
import { ContactType } from '@pages/Home/Contacts/components/ContactsItem/types';

export const getContacts = async () => {
  try {
    const { data } = await axiosInstance<ContactType[]>('/contacts');

    return data;
  } catch (error) {
    console.error('Error while fetching data: ', error);
  }
};

export const createContact = async (newContact: ContactType) => {
  try {
    const { data } = await axiosInstance.post('/contacts', newContact);

    return data;
  } catch (error) {
    console.error('Error while creating a new contact: ', error);
  }
};
