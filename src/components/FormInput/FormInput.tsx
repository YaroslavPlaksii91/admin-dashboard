import { FC, useState, MouseEvent } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { FormInputProps } from './types';
import { TOGGLE_BUTTON_TEST_ID } from './constants';

export const FormInput: FC<FormInputProps> = ({
  label,
  type,
  name,
  placeholder,
  register,
  errors,
  isPassword,
  defaultValue,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      defaultValue={defaultValue}
      label={label}
      type={showPassword ? 'text' : type}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      {...register}
      error={!!errors[name]}
      helperText={errors[name]?.message as string}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={
        isPassword
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    data-testid={TOGGLE_BUTTON_TEST_ID}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : undefined
      }
    />
  );
};
