import { IMAGE_SIZE } from '@components/AddPhoto/constants';

export const CONTACTS_FORM_FIELDS = Object.freeze({
  PHOTO: 'photo',
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  EMAIL: 'email',
  ADDRESS: 'address',
});

export const CONTACTS_FORM_CONFIG = Object.freeze({
  [CONTACTS_FORM_FIELDS.PHOTO]: {
    label: 'Add photo',
    name: 'photo',
    size: IMAGE_SIZE.BIG,
  },
  [CONTACTS_FORM_FIELDS.FIRST_NAME]: {
    label: 'first name',
    type: 'text',
    name: 'firstName',
    placeholder: 'First name',
  },
  [CONTACTS_FORM_FIELDS.LAST_NAME]: {
    label: 'last name',
    type: 'text',
    name: 'lastName',
    placeholder: 'Last name',
  },
  [CONTACTS_FORM_FIELDS.EMAIL]: {
    label: 'email',
    type: 'email',
    name: 'email',
    placeholder: 'Email',
  },
  [CONTACTS_FORM_FIELDS.ADDRESS]: {
    label: 'address',
    type: 'text',
    name: 'address',
    placeholder: 'Address',
  },
});
