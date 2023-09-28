import { FC } from 'react';
import { TextField, Box, Button, SvgIcon, FormLabel } from '@mui/material';

import { FileInputProps } from './types';

export const FileInput: FC<FileInputProps> = ({
  label,
  name,
  register,
  errors,
}) => {
  return (
    <Box sx={{ textAlign: 'start', mb: '46px' }}>
      <TextField
        type="file"
        id={name}
        {...register}
        error={!!errors[name]}
        helperText={errors[name]?.message as string}
        sx={{ display: 'none' }}
      />
      <FormLabel
        htmlFor={name}
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: '20px',
          letterSpacing: 0.2,
        }}
      >
        <Button
          variant="outlined"
          component="span"
          sx={{ border: 'none', mr: 6, '&:hover': { border: 'none' } }}
        >
          <SvgIcon titleAccess="Add photo" sx={{ width: 60, height: 60 }}>
            <use href="/src/assets/icons/sprite.svg#icon-addPhoto"></use>
          </SvgIcon>
        </Button>
        {label}
      </FormLabel>
    </Box>
  );
};
