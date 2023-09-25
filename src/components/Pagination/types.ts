export type PaginationProps = {
  count: number;
  page: number;
  setPage: (newPage: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rows: number) => void;
};
