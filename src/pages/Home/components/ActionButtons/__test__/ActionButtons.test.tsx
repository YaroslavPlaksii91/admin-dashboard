import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { ActionButtons } from '../ActionButtons';
import {
  SORT_BTN_TEST_ID,
  FILTER_BTN_TEST_ID,
  ADD_BTN_TEST_ID,
} from '../constants';

describe('ActionButtons component', () => {
  afterEach(cleanup);

  const mockProps = {
    handleSort: jest.fn(),
    onAddClick: jest.fn(),
    setFilterValue: jest.fn(),
    sortOptions: ['Option1', 'Option2'],
    filterOptions: ['Filter1', 'Filter2'],
    addButtonName: 'Add button',
    filterValue: 'value',
    filterTitle: 'Title',
  };

  it('should be rendered', () => {
    const { asFragment } = render(<ActionButtons {...mockProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    render(<ActionButtons {...mockProps} />);

    expect(screen.getByTestId(SORT_BTN_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(FILTER_BTN_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(ADD_BTN_TEST_ID)).toBeInTheDocument();
  });

  it('handles sort click correctly', () => {
    render(<ActionButtons {...mockProps} />);

    fireEvent.click(screen.getByTestId(SORT_BTN_TEST_ID));
    expect(mockProps.handleSort).not.toHaveBeenCalled();

    fireEvent.click(screen.getByText('By Option1'));
    expect(mockProps.handleSort).toHaveBeenCalledWith(mockProps.sortOptions[0]);
  });

  it('handles filter change correctly', () => {
    render(<ActionButtons {...mockProps} />);

    fireEvent.click(screen.getByTestId(FILTER_BTN_TEST_ID));
    const filterOption1 = screen.getByLabelText(mockProps.filterOptions[0]);
    expect(mockProps.setFilterValue).not.toHaveBeenCalled();

    fireEvent.click(filterOption1);
    expect(mockProps.setFilterValue).toHaveBeenCalledWith(
      mockProps.filterOptions[0],
    );
  });

  it('handles add button click correctly', () => {
    render(<ActionButtons {...mockProps} />);

    fireEvent.click(screen.getByTestId(ADD_BTN_TEST_ID));
    expect(mockProps.onAddClick).toHaveBeenCalled();
  });
});
