import { FC, useState, MouseEvent } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { FormInputProps } from './types';

export const FormInput: FC<FormInputProps> = ({
  label,
  type,
  name,
  placeholder,
  register,
  errors,
  isPassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      label={label}
      type={isPassword && showPassword ? 'text' : type}
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
