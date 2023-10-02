import { FC, useState, MouseEvent } from 'react';
import { Box, Button, SvgIcon } from '@mui/material';

import { ActionButtonsProps } from './types';
import { SortPopover } from '../SortPopover/SortPopover';

export const ActionButtons: FC<ActionButtonsProps> = ({
  onFilterClick,
  handleSort,
  onAddClick,
  addButtonName,
  sortOptions,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ display: 'flex', mb: '47px', padding: '0 32px' }}>
      <Button
        variant="text"
        sx={{ color: 'grayDarkColor', mr: 8 }}
        aria-describedby={id}
        onClick={handleClick}
      >
        <SvgIcon titleAccess="Sort" fontSize="small" sx={{ mr: 2 }}>
          <use href="/src/assets/icons/sprite.svg#icon-sort"></use>
        </SvgIcon>
        Sort
      </Button>

      <SortPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleSort={handleSort}
        options={sortOptions}
      />

      <Button
        variant="text"
        sx={{ color: 'grayDarkColor' }}
        onClick={onFilterClick}
      >
        <SvgIcon titleAccess="Filter" fontSize="small" sx={{ mr: 2 }}>
          <use href="/src/assets/icons/sprite.svg#icon-filter"></use>
        </SvgIcon>
        Filter
      </Button>
      <Button
        variant="text"
        sx={{ color: 'accentBlueColor', ml: 'auto' }}
        onClick={onAddClick}
      >
        <SvgIcon
          titleAccess="Add new ticket"
          sx={{ mr: 2, width: 8, height: 8 }}
        >
          <use href="/src/assets/icons/sprite.svg#icon-add"></use>
        </SvgIcon>
        {addButtonName}
      </Button>
    </Box>
  );
};
