import { cleanup, render, screen } from '@testing-library/react';

import { ActionButtons } from '../ActionButtons';

describe('ActionButtons component', () => {
  afterEach(cleanup);

  const mockProps = {
    handleSort: jest.fn(),
    onAddClick: jest.fn(),
    addButtonName: 'Add ticket',
    sortOptions: ['name', 'date', 'title'],
    setFilterValue: jest.fn(),
    filterValue: 'name',
    filterTitle: 'Name',
    filterOptions: ['high', 'low', 'normal'],
  };

  it('should be rendered', () => {
    const { asFragment } = render(<ActionButtons {...mockProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    render(<ActionButtons {...mockProps} />);

    const buttons = screen.getAllByRole('button');

    buttons.forEach(button => expect(button).toBeInTheDocument());
  });
});
