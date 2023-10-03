import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@mui/material';

import { EMAIL_REGEX } from '@utils/constants';
import { sendResetEmail } from '@services/firebase/firebase';
import { FormInput } from '@components/FormInput/FormInput';

import { ForgotPasswordFormData, ForgotPasswordFormProps } from './types';
import {
  FORGOT_PASSWORD_FIELDS,
  FORGOT_PASSWORD_FIELDS_CONFIG,
} from './constants';

export const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({
  setIsSubmitted,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>();

  const onSubmit: SubmitHandler<ForgotPasswordFormData> = async data => {
    try {
      await sendResetEmail(data.email);

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormInput
        {...FORGOT_PASSWORD_FIELDS_CONFIG[FORGOT_PASSWORD_FIELDS.EMAIL]}
        register={register('email', {
          required: 'Email is required',
          pattern: {
            value: EMAIL_REGEX,
            message: 'Invalid email address',
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
