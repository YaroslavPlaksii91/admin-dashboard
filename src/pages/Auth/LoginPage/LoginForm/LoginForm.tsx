import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';

import { ROUTES } from '@routes/constants';
import { EMAIL_REGEX, PASSWORD_MIN_LENGTH } from '@utils/constants';
import { signInUser } from '@services/firebase/firebase';
import { FormInput } from '@components/FormInput/FormInput';
import { authStore } from '@store/auth';

import { LOGIN_FIELDS, LOGIN_FIELDS_CONFIG } from './constants';
import { LoginFormData } from './types';

export const LoginForm: FC = observer(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormData> = async data => {
    try {
      const userCredential = await signInUser(data.email, data.password);

      authStore.login();
      authStore.setUser(userCredential.user);

      navigate(ROUTES.HOME_PAGE, { replace: true });
    } catch (error) {
      console.error('Error during authorization: ', error);
      toast.error('Wrong password or email!', {
        autoClose: 3000,
      });
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
});
