import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@mui/material';

import { ResetPasswordFormData } from './types';
import { PASSWORD_MIN_LENGTH } from '@utils/constants';
import {
  RESET_PASSWORD_FIELDS,
  RESET_PASSWORD_FIELDS_CONFIG,
} from './constants';
import { FormInput } from '@components/FormInput/FormInput';

export const ResetPasswordForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ResetPasswordFormData>();

  const onSubmit: SubmitHandler<ResetPasswordFormData> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormInput
        {...RESET_PASSWORD_FIELDS_CONFIG[RESET_PASSWORD_FIELDS.PASSWORD]}
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
        {...RESET_PASSWORD_FIELDS_CONFIG[
          RESET_PASSWORD_FIELDS.CONFIRM_PASSWORD
        ]}
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
        Send
      </Button>
    </form>
  );
};
