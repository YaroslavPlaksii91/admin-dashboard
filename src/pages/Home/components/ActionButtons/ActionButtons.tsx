import { FC } from 'react';
import { Box, Button, SvgIcon } from '@mui/material';

import { ActionButtonsProps } from './types';

export const ActionButtons: FC<ActionButtonsProps> = ({
  onSortClick,
  onFilterClick,
  onAddClick,
  addButtonName,
}) => {
  return (
    <Box sx={{ display: 'flex', mb: '47px', padding: '0 32px' }}>
      <Button
        variant="text"
        sx={{ color: 'grayDarkColor', mr: 8 }}
        onClick={onSortClick}
      >
        <SvgIcon titleAccess="Sort" fontSize="small" sx={{ mr: 2 }}>
          <use href="/src/assets/icons/sprite.svg#icon-sort"></use>
        </SvgIcon>
        Sort
      </Button>
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
