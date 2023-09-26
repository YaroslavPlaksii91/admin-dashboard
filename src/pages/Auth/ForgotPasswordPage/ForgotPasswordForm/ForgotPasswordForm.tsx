import { FC } from 'react';
import { useNavigate } from 'react-router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@mui/material';

import { EMAIL_REGEX } from '@utils/constants';
import { ROUTES } from '@routes/constants';
import { getUser } from '@services/localeStorage';
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
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ForgotPasswordFormData> = data => {
    const user = getUser(data.email);

    if (!user) {
      return console.error('User not found!');
    }

    setIsSubmitted(true);

    setTimeout(() => {
      navigate(ROUTES.RESET_PASSWORD_PAGE, { state: { from: data.email } });
    }, 3000);
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
