import { ContactType } from '@pages/Home/Contacts/ContactsItem/types';

import data from './data.json';

export const getContacts = () =>
  new Promise<ContactType[]>(resolve => resolve(data.contacts));
