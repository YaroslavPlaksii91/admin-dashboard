import { FC } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';

import { ModalProps } from './types';

export const ModalComponent: FC<ModalProps> = ({
  isOpen,
  title,
  children,
  onSubmit,
  onClose,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="modal-title">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: 8,
          width: 380,
          textAlign: 'center',
          bgcolor: '#fff',
          outline: 'none',
        }}
      >
        <Typography id="modal-title" variant="h2">
          {title}
        </Typography>
        {children}
        <Button
          variant="contained"
          type="submit"
          fullWidth
          onClick={onSubmit}
          sx={{ margin: '24px 0' }}
        >
          Save
        </Button>
        <Button
          variant="text"
          fullWidth
          onClick={onClose}
          sx={{ padding: '8px 0' }}
        >
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};
