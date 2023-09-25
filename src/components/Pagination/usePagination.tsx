import { useState } from 'react';

import { ROWS_PER_PAGE } from './constants';

export const usePagination = (data: Array<Object>) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGE);

  const getCurrentPageData = () => {
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    return data.slice(startIndex, endIndex);
  };

  return {
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    getCurrentPageData,
  };
};
