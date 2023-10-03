import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';

import { PASSWORD_MIN_LENGTH } from '@utils/constants';
import { confirmThePasswordReset } from '@services/firebase/firebase';
import { FormInput } from '@components/FormInput/FormInput';

import { ResetPasswordFormData } from './types';
import {
  RESET_PASSWORD_FIELDS,
  RESET_PASSWORD_FIELDS_CONFIG,
} from './constants';

export const ResetPasswordForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<ResetPasswordFormData>();

  const [searchParams] = useSearchParams();

  const oobCode: string | null = searchParams.get('oobCode');

  const onSubmit: SubmitHandler<ResetPasswordFormData> = async ({
    password,
  }) => {
    try {
      oobCode && (await confirmThePasswordReset(oobCode, password));

      toast.success('Password was updated!', {
        autoClose: 3000,
      });

      reset();
    } catch (error) {
      console.error('Error: ', error);
    }
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
