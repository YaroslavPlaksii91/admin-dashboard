import { ContactType } from '../ContactsItem/types';

export type AddContactsData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  date: string;
  photo: Blob[];
};

export type UpdateContactData = {
  name: string;
  email: string;
  address: string;
  image: string;
  date: string;
};

export type ContactsFormProps = {
  addContact: (data: AddContactsData) => void;
  editContact: (data: AddContactsData) => void;
  activeContact?: ContactType;
};
