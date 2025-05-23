import { axiosInstance } from '@services/axios/axiosInstance';
import { ContactType } from '@pages/Home/Contacts/components/ContactsItem/types';
import { UpdateContactData } from '@pages/Home/Contacts/components/ContactsForm/types';

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

export const editContact = async (
  contactId: string,
  contact: UpdateContactData,
) => {
  try {
    const { data } = await axiosInstance.put(`/contacts/${contactId}`, contact);

    return data;
  } catch (error) {
    console.error('Error while updating a contact: ', error);
  }
};

export const deleteContact = async (contactId: string) => {
  try {
    await axiosInstance.delete(`/contacts/${contactId}`);
  } catch (error) {
    console.error('Error while removing a contact: ', error);
  }
};
