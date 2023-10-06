import { FC } from 'react';
import { TextField, MenuItem } from '@mui/material';

import { SelectProps } from './types';

export const Select: FC<SelectProps> = ({
  label,
  name,
  register,
  errors,
  options,
  defaultValue: value,
}) => {
  const defaultValue = value ? value : options[0].value;

  return (
    <TextField
      select
      label={label}
      defaultValue={defaultValue}
      variant="outlined"
      fullWidth
      {...register}
      error={!!errors[name]}
      helperText={errors[name]?.message as string}
      InputLabelProps={{
        shrink: true,
      }}
    >
      {options.map(option => (
        <MenuItem
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
