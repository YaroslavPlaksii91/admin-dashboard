import { MouseEvent, ChangeEvent, FC } from 'react';
import { TablePagination } from '@mui/material';

import { ROWS_PER_PAGE_OPTIONS } from './constants';
import { PaginationProps } from './types';

export const Pagination: FC<PaginationProps> = ({
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  count,
}) => {
  const handleChangePage = (
    _: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
      sx={{
        color: 'secondaryTextColor',
        '& .MuiToolbar-root': {
          padding: '16px 32px 16px',
        },
        '& .MuiSelect-icon': {
          fill: '#9FA2B4',
        },
        '& .MuiSelect-select': {
          color: 'grayDarkColor',
        },
      }}
    />
  );
};
