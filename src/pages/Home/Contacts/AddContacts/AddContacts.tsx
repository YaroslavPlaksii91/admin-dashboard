import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Box } from '@mui/material';

import { FormInput } from '@components/FormInput/FormInput';
import { AddPhoto } from '@components/AddPhoto/AddPhoto';
import { EMAIL_REGEX } from '@utils/constants';

import { ADD_CONTACT_CONFIG, ADD_CONTACT_FIELDS } from './constants';
import { AddContactsData, AddContactsProps } from './types';

export const AddContacts: FC<AddContactsProps> = ({ addContact }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddContactsData>();

  const onSubmit: SubmitHandler<AddContactsData> = data => {
    addContact(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ margin: '32px 0 24px' }}
    >
      <AddPhoto
        {...ADD_CONTACT_CONFIG[ADD_CONTACT_FIELDS.PHOTO]}
        register={register('photo', {
          required: 'Choose a photo',
        })}
        errors={errors}
      />

      <FormInput
        {...ADD_CONTACT_CONFIG[ADD_CONTACT_FIELDS.FIRST_NAME]}
        register={register('firstName', {
          required: 'First name is required',
          minLength: {
            value: 2,
            message: 'First name must be at least 2 characters',
          },
        })}
        errors={errors}
      />

      <FormInput
        {...ADD_CONTACT_CONFIG[ADD_CONTACT_FIELDS.LAST_NAME]}
        register={register('lastName', {
          required: 'Last name is required',
          minLength: {
            value: 2,
            message: 'Last name must be at least 2 characters',
          },
        })}
        errors={errors}
      />

      <FormInput
        {...ADD_CONTACT_CONFIG[ADD_CONTACT_FIELDS.EMAIL]}
        register={register('email', {
          required: 'Email is required',
          pattern: {
            value: EMAIL_REGEX,
            message: 'Invalid email address',
          },
        })}
        errors={errors}
      />

      <FormInput
        {...ADD_CONTACT_CONFIG[ADD_CONTACT_FIELDS.ADDRESS]}
        register={register('address', {
          required: 'Address is required',
          minLength: {
            value: 10,
            message: 'Address must be at least 10 characters',
          },
        })}
        errors={errors}
      />

      <Button variant="contained" type="submit" fullWidth>
        Save
      </Button>
    </Box>
  );
};
