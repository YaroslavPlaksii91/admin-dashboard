import { cleanup, render, screen } from '@testing-library/react';

import { Statistics } from '../Statistics';

describe('Statistics component', () => {
  afterEach(cleanup);

  const mockData = [
    { section: 'Section 1', value: '10' },
    { section: 'Section 2', value: '20' },
    { section: 'Section 3', value: '30' },
  ];

  it('should be rendered', () => {
    const { asFragment } = render(<Statistics data={mockData} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders each item in the data', () => {
    render(<Statistics data={mockData} />);

    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(mockData.length);
  });

  it('displays section and value for each item', () => {
    render(<Statistics data={mockData} />);

    mockData.forEach(item => {
      expect(screen.getByText(item.section)).toBeInTheDocument();
      expect(screen.getByText(item.value)).toBeInTheDocument();
    });
  });
});
