import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Box } from '@mui/material';

import { FormInput } from '@components/FormInput/FormInput';
import { AddPhoto } from '@components/AddPhoto/AddPhoto';
import { EMAIL_REGEX } from '@utils/constants';

import { CONTACTS_FORM_CONFIG, CONTACTS_FORM_FIELDS } from './constants';
import { AddContactsData, ContactsFormProps } from './types';

export const ContactsForm: FC<ContactsFormProps> = ({
  addContact,
  editContact,
  activeContact,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddContactsData>();

  const firstNameDefault = activeContact?.name.split(' ')[0];
  const lastNameDefault = activeContact?.name.split(' ')[1];

  const onSubmit: SubmitHandler<AddContactsData> = data => {
    if (activeContact) {
      editContact({ ...data, date: activeContact.date });
    } else {
      addContact(data);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ margin: '32px 0 24px' }}
    >
      <AddPhoto
        {...CONTACTS_FORM_CONFIG[CONTACTS_FORM_FIELDS.PHOTO]}
        register={register('photo', {
          required: 'Choose a photo',
        })}
        errors={errors}
        src={activeContact?.image}
      />

      <FormInput
        {...CONTACTS_FORM_CONFIG[CONTACTS_FORM_FIELDS.FIRST_NAME]}
        register={register('firstName', {
          required: 'First name is required',
          minLength: {
            value: 2,
            message: 'First name must be at least 2 characters',
          },
        })}
        errors={errors}
        defaultValue={firstNameDefault}
      />

      <FormInput
        {...CONTACTS_FORM_CONFIG[CONTACTS_FORM_FIELDS.LAST_NAME]}
        register={register('lastName', {
          required: 'Last name is required',
          minLength: {
            value: 2,
            message: 'Last name must be at least 2 characters',
          },
        })}
        errors={errors}
        defaultValue={lastNameDefault}
      />

      <FormInput
        {...CONTACTS_FORM_CONFIG[CONTACTS_FORM_FIELDS.EMAIL]}
        register={register('email', {
          required: 'Email is required',
          pattern: {
            value: EMAIL_REGEX,
            message: 'Invalid email address',
          },
        })}
        errors={errors}
        defaultValue={activeContact?.email}
      />

      <FormInput
        {...CONTACTS_FORM_CONFIG[CONTACTS_FORM_FIELDS.ADDRESS]}
        register={register('address', {
          required: 'Address is required',
          minLength: {
            value: 10,
            message: 'Address must be at least 10 characters',
          },
        })}
        errors={errors}
        defaultValue={activeContact?.address}
      />

      <Button variant="contained" type="submit" fullWidth>
        Save
      </Button>
    </Box>
  );
};
