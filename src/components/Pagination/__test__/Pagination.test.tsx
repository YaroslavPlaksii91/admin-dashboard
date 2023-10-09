import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { Pagination } from '../Pagination';

describe('Pagination component', () => {
  afterEach(cleanup);

  const setPage = jest.fn();
  const setRowsPerPage = jest.fn();
  const rowsPerPage = 10;
  const page = 1;
  const count = 100;

  it('should be rendered', () => {
    const { asFragment } = render(
      <Pagination
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        count={count}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    render(
      <Pagination
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        count={count}
      />,
    );

    const rowsPerPageText = screen.getByText('Rows per page:');

    expect(rowsPerPageText).toBeInTheDocument();
  });

  it('calls setPage when changing page', () => {
    render(
      <Pagination
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        count={count}
      />,
    );

    const nextPageButton = screen.getByLabelText('Go to next page');

    fireEvent.click(nextPageButton);

    expect(setPage).toHaveBeenCalledWith(2);
  });
});
