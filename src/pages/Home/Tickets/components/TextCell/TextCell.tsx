import { FC } from 'react';
import { Typography, Box } from '@mui/material';

import { TextCellType } from './types';

export const TextCell: FC<TextCellType> = ({ text, subtext }) => {
  return (
    <Box>
      <Typography
        sx={{
          mb: 1,
          fontSize: 14,
          fontWeight: 600,
          lineHeight: 1.43,
          letterSpacing: 0.2,
        }}
      >
        {text}
      </Typography>
      <Typography
        sx={{
          fontSize: 12,
          lineHeight: 1.33,
          letterSpacing: 0.1,
          color: 'additionalInfoColor',
        }}
      >
        {subtext}
      </Typography>
    </Box>
  );
};
