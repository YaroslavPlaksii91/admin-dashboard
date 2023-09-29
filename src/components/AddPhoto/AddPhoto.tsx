import { FC, useState, ChangeEvent } from 'react';
import {
  TextField,
  Box,
  Button,
  SvgIcon,
  FormLabel,
  Typography,
} from '@mui/material';

import { FileInputProps } from './types';
import { IMAGE_SIZE } from './constants';

export const AddPhoto: FC<FileInputProps> = ({
  label,
  name,
  errors,
  register,
  size,
}) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreviewUrl(imageUrl);
    }
  };

  const shouldShowError = errors && errors[name] && !imagePreviewUrl;
  const isImageBig = size === IMAGE_SIZE.BIG;

  return (
    <Box sx={{ textAlign: 'start', mb: isImageBig ? '46px' : 0 }}>
      <TextField
        type="file"
        id={name}
        {...register}
        onChange={handleFileChange}
        sx={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          opacity: 0,
        }}
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
          color: 'mainTextColor',
        }}
      >
        <Button
          variant="outlined"
          component="span"
          sx={{
            width: size,
            height: size,
            border: 'none',
            mr: isImageBig ? 6 : 0,
            '&:hover': { border: 'none' },
          }}
        >
          {imagePreviewUrl ? (
            <Box
              sx={{
                width: size,
                height: size,
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <img
                src={imagePreviewUrl}
                alt="Photo"
                width={size}
                height={size}
              />
            </Box>
          ) : (
            <SvgIcon titleAccess="Add photo" sx={{ width: size, height: size }}>
              <use href="/src/assets/icons/sprite.svg#icon-addPhoto"></use>
            </SvgIcon>
          )}
        </Button>
        {label}
        {shouldShowError && (
          <Typography
            sx={{
              position: 'absolute',
              top: '100%',
              fontSize: 12,
              lineHeight: '20px',
              letterSpacing: 0.3,
              color: '#d32f2f',
            }}
          >
            {errors[name]?.message as string}
          </Typography>
        )}
      </FormLabel>
    </Box>
  );
};
