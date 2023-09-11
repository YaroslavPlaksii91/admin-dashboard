import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@mui/material';

import { LoginFormData } from './types';
import { EMAIL_REGEX, PASSWORD_MIN_LENGTH } from '@utils/constants';
import { LOGIN_FIELDS, LOGIN_FIELDS_CONFIG } from './constants';
import { FormInput } from '@components/FormInput/FormInput';

import styles from './LoginForm.module.css';

export const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
      <FormInput
        {...LOGIN_FIELDS_CONFIG[LOGIN_FIELDS.EMAIL]}
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
        {...LOGIN_FIELDS_CONFIG[LOGIN_FIELDS.PASSWORD]}
        register={register('password', {
          required: 'Password is required',
          minLength: {
            value: PASSWORD_MIN_LENGTH,
            message: 'Password must be at least 6 characters',
          },
        })}
        errors={errors}
      />

      <Button variant="contained" type="submit" fullWidth>
        Log In
      </Button>
    </form>
  );
};
