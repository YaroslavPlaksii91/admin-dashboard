import { FC } from 'react';
import { Button, Popover } from '@mui/material';

import { SortPopoverProps } from './types';

export const SortPopover: FC<SortPopoverProps> = ({
  id,
  open,
  anchorEl,
  handleClose,
  handleSort,
  options,
}) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      {options.map(option => (
        <Button
          key={option}
          variant="text"
          sx={{ display: 'block', width: '100%', padding: '10px' }}
          onClick={() => handleSort(option)}
        >
          By {option}
        </Button>
      ))}
    </Popover>
  );
};
