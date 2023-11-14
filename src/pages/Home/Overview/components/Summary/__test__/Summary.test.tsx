import { cleanup, render, screen } from '@testing-library/react';

import { Summary } from '../Summary';

describe('Summary component', () => {
  afterEach(cleanup);

  const mockData = [
    { label: 'Label 1', count: 10 },
    { label: 'Label 2', count: 20 },
    { label: 'Label 3', count: 30 },
  ];

  it('should be rendered', () => {
    const { asFragment } = render(<Summary data={mockData} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders each item in the data', () => {
    render(<Summary data={mockData} />);
    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(mockData.length);
  });

  it('displays label and count for each item', () => {
    render(<Summary data={mockData} />);

    mockData.forEach(item => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
      expect(screen.getByText(item.count.toString())).toBeInTheDocument();
    });
  });
});
