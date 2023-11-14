import { FC } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';

import { DatePickerProps } from './types';

export const DatePicker: FC<DatePickerProps> = ({
  errors,
  field,
  label,
  name,
  disabled,
}) => {
  const errorMessage = errors[name]?.message?.toString();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label={label}
        value={field.value || null}
        inputRef={field.ref}
        onChange={field.onChange}
        onAccept={field.onChange}
        disabled={disabled}
        slotProps={{
          textField: {
            variant: 'outlined',
            fullWidth: true,
            InputLabelProps: { shrink: true },
            error: !!errors[name],
            helperText: errorMessage || '',
          },
        }}
      />
    </LocalizationProvider>
  );
};
