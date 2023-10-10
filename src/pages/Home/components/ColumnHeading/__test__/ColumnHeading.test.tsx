import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { ColumnHeading } from '../ColumnHeading';

describe('ColumnHeading component', () => {
  afterEach(cleanup);

  const onClick = jest.fn();

  it('should be rendered', () => {
    const { asFragment } = render(
      <ColumnHeading
        onClick={onClick}
        size={4}
        name="columnName"
        title="Column Title"
        sortKey="columnName"
        sortDirection="asc"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with ascending sort', () => {
    render(
      <ColumnHeading
        onClick={onClick}
        size={4}
        name="columnName"
        title="Column Title"
        sortKey="columnName"
        sortDirection="asc"
      />,
    );

    expect(screen.getByText('Column Title')).toBeInTheDocument();
    expect(screen.getByTestId('NorthIcon')).toBeInTheDocument();
  });

  it('renders correctly with descending sort', () => {
    render(
      <ColumnHeading
        onClick={onClick}
        size={4}
        name="columnName"
        title="Column Title"
        sortKey="columnName"
        sortDirection="desc"
      />,
    );

    expect(screen.getByText('Column Title')).toBeInTheDocument();
    expect(screen.getByTestId('SouthIcon')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    render(
      <ColumnHeading
        onClick={onClick}
        size={4}
        name="columnName"
        title="Column Title"
        sortKey="columnName"
        sortDirection="asc"
      />,
    );

    fireEvent.click(screen.getByText('Column Title'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
