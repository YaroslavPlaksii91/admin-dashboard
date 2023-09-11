import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@mui/material';

import { RegisterFormData } from './types';
import {
  EMAIL_REGEX,
  PASSWORD_MIN_LENGTH,
  FIRST_NAME_MIN_LENGTH,
  LAST_NAME_MIN_LENGTH,
} from '@utils/constants';
import { REGISTER_FIELDS, REGISTER_FIELDS_CONFIG } from './constants';
import { FormInput } from '@components/FormInput/FormInput';

export const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterFormData>();

  const onSubmit: SubmitHandler<RegisterFormData> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormInput
        {...REGISTER_FIELDS_CONFIG[REGISTER_FIELDS.EMAIL]}
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
        {...REGISTER_FIELDS_CONFIG[REGISTER_FIELDS.FIRST_NAME]}
        register={register('firstName', {
          required: 'First name is required',
          minLength: {
            value: FIRST_NAME_MIN_LENGTH,
            message: 'First name must be at least 2 characters',
          },
        })}
        errors={errors}
      />

      <FormInput
        {...REGISTER_FIELDS_CONFIG[REGISTER_FIELDS.LAST_NAME]}
        register={register('lastName', {
          required: 'Last name is required',
          minLength: {
            value: LAST_NAME_MIN_LENGTH,
            message: 'Last name must be at least 2 characters',
          },
        })}
        errors={errors}
      />

      <FormInput
        {...REGISTER_FIELDS_CONFIG[REGISTER_FIELDS.PASSWORD]}
        register={register('password', {
          required: 'Password is required',
          minLength: {
            value: PASSWORD_MIN_LENGTH,
            message: 'Password must be at least 6 characters',
          },
        })}
        errors={errors}
      />

      <FormInput
        {...REGISTER_FIELDS_CONFIG[REGISTER_FIELDS.CONFIRM_PASSWORD]}
        register={register('confirmPassword', {
          required: 'Password is required',
          validate: value => {
            const password = getValues('password');
            return value === password || 'Passwords do not match';
          },
        })}
        errors={errors}
      />

      <Button variant="contained" type="submit" fullWidth>
        Register
      </Button>
    </form>
  );
};
