import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { Heading } from '../Heading';

describe('Heading component', () => {
  afterEach(cleanup);

  const handleSort = jest.fn();
  const columns = [
    { name: 'column1', title: 'Column 1', size: 4 },
    { name: 'column2', title: 'Column 2', size: 4 },
    { name: 'column3', title: 'Column 3', size: 4 },
  ];

  it('should be rendered', () => {
    const { asFragment } = render(
      <Heading
        handleSort={handleSort}
        sortKey="column1"
        sortDirection="asc"
        columns={columns}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with column headings', () => {
    render(
      <Heading
        handleSort={handleSort}
        sortKey="column1"
        sortDirection="asc"
        columns={columns}
      />,
    );

    columns.forEach(col => {
      expect(screen.getByText(col.title)).toBeInTheDocument();
    });
  });

  it('calls handleSort when a column heading is clicked', () => {
    render(
      <Heading
        handleSort={handleSort}
        sortKey="column1"
        sortDirection="asc"
        columns={columns}
      />,
    );

    columns.forEach(col => {
      fireEvent.click(screen.getByText(col.title));
      expect(handleSort).toHaveBeenCalledWith(col.name);
    });
  });
});
