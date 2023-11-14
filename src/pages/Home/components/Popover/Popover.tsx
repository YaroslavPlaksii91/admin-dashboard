import { FC } from 'react';
import { Popover as PopoverComponent } from '@mui/material';

import { PopoverProps } from './types';
import { POPOVER_TEST_ID } from './constants';

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
      data-testid={POPOVER_TEST_ID}
    >
      {children}
    </PopoverComponent>
  );
};
