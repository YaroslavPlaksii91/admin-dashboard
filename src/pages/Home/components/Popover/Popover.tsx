import { FC } from 'react';
import { Popover as PopoverComponent } from '@mui/material';

import { PopoverProps } from './types';

export const Popover: FC<PopoverProps> = ({
  id,
  open,
  anchorEl,
  handleClose,
  children,
}) => {
  return (
    <PopoverComponent
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      {children}
    </PopoverComponent>
  );
};
