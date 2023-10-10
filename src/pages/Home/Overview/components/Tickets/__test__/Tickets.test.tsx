import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Tickets } from '../Tickets';

describe('Tickets component', () => {
  afterEach(cleanup);

  const mockData = [
    { title: 'Ticket 1', count: 3 },
    { title: 'Ticket 2', count: 5 },
    { title: 'Ticket 3', count: 2 },
  ];

  it('should be rendered', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Tickets data={mockData} />
      </BrowserRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the list of tickets', () => {
    render(
      <BrowserRouter>
        <Tickets data={mockData} />
      </BrowserRouter>,
    );

    mockData.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.count.toString())).toBeInTheDocument();
    });
  });

  it('displays "Unresolved tickets" heading', () => {
    render(
      <BrowserRouter>
        <Tickets data={mockData} />
      </BrowserRouter>,
    );

    expect(screen.getByText('Unresolved tickets')).toBeInTheDocument();
  });

  it('displays "View details" link', () => {
    render(
      <BrowserRouter>
        <Tickets data={mockData} />
      </BrowserRouter>,
    );

    expect(screen.getByText('View details')).toBeInTheDocument();
  });

  it('displays the group name', () => {
    render(
      <BrowserRouter>
        <Tickets data={mockData} />
      </BrowserRouter>,
    );

    expect(screen.getByText('Group:')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
  });
});
