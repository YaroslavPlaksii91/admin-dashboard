import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@mui/material';

import { ROUTES } from '@routes/constants';
import { EMAIL_REGEX, PASSWORD_MIN_LENGTH } from '@utils/constants';
import { getUser, setIsLoggedIn } from '@services/localeStorage/localeStorage';
import { FormInput } from '@components/FormInput/FormInput';

import { LOGIN_FIELDS, LOGIN_FIELDS_CONFIG } from './constants';
import { LoginFormData } from './types';

export const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormData> = data => {
    const user = getUser(data.email);

    if (user?.password === data.password) {
      setIsLoggedIn(user.email);
      navigate(ROUTES.HOME_PAGE, { replace: true });
    } else {
      console.error('User not found!');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
