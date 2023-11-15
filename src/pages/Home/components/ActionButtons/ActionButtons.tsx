import { FC, useState, MouseEvent } from 'react';
import { Box, Button, SvgIcon } from '@mui/material';

import { ActionButtonsProps } from './types';
import {
  SORT_BTN_TEST_ID,
  FILTER_BTN_TEST_ID,
  ADD_BTN_TEST_ID,
} from './constants';
import { Popover } from '../Popover/Popover';
import { RadioButtons } from '../RadioButtons/RadioButtons';

export const ActionButtons: FC<ActionButtonsProps> = ({
  handleSort,
  onAddClick,
  addButtonName,
  sortOptions,
  setFilterValue,
  filterValue,
  filterTitle,
  filterOptions,
}) => {
  const [sortAnchorEl, setSortAnchorEl] = useState<HTMLButtonElement | null>(
    null,
  );
  const [filterAnchorEl, setFilterAnchorEl] =
    useState<HTMLButtonElement | null>(null);

  const handleSortClick = (event: MouseEvent<HTMLButtonElement>) => {
    setSortAnchorEl(event.currentTarget);
  };
  const handleFilterClick = (event: MouseEvent<HTMLButtonElement>) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => {
    setSortAnchorEl(null);
  };
  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const sortOpen = Boolean(sortAnchorEl);
  const sortId = sortOpen ? 'sort-popover' : undefined;

  const filterOpen = Boolean(filterAnchorEl);
  const filterId = filterOpen ? 'filter-popover' : undefined;

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue((event.target as HTMLInputElement).value);
  };

  return (
    <Box sx={{ display: 'flex', mb: '47px', padding: '0 32px' }}>
      <Button
        variant="text"
        sx={{ color: 'grayDarkColor', mr: 8 }}
        aria-describedby={sortId}
        onClick={handleSortClick}
        data-testid={SORT_BTN_TEST_ID}
      >
        <SvgIcon titleAccess="Sort" fontSize="small" sx={{ mr: 2 }}>
          <use href="/sprite.svg#icon-sort"></use>
        </SvgIcon>
        Sort
      </Button>

      <Popover
        id={sortId}
        open={sortOpen}
        anchorEl={sortAnchorEl}
        handleClose={handleSortClose}
      >
        {sortOptions.map(option => (
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

      <Button
        variant="text"
        sx={{ color: 'grayDarkColor' }}
        aria-describedby={filterId}
        onClick={handleFilterClick}
        data-testid={FILTER_BTN_TEST_ID}
      >
        <SvgIcon titleAccess="Filter" fontSize="small" sx={{ mr: 2 }}>
          <use href="/sprite.svg#icon-filter"></use>
        </SvgIcon>
        Filter
      </Button>

      <Popover
        id={filterId}
        open={filterOpen}
        anchorEl={filterAnchorEl}
        handleClose={handleFilterClose}
      >
        <RadioButtons
          value={filterValue}
          handleChange={handleFilterChange}
          title={filterTitle}
          options={filterOptions}
        />
      </Popover>

      <Button
        variant="text"
        sx={{ color: 'accentBlueColor', ml: 'auto' }}
        onClick={onAddClick}
        data-testid={ADD_BTN_TEST_ID}
      >
        <SvgIcon titleAccess="Add new item" sx={{ mr: 2, width: 8, height: 8 }}>
          <use href="/sprite.svg#icon-add"></use>
        </SvgIcon>
        {addButtonName}
      </Button>
    </Box>
  );
};
