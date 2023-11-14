import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { TicketsItem } from '../TicketsItem';

describe('TicketsItem component', () => {
  afterEach(cleanup);

  const handleDeleteMock = jest.fn();
  const handleEditMock = jest.fn();
  const mockTicket = {
    id: '1',
    title: 'Sample Ticket',
    customerName: 'John Doe',
    customerDate: '2023-10-10T14:30:00Z',
    date: '2023-10-10T14:30:00Z',
    updated: '2023-10-10T14:30:00Z',
    priority: 'high',
    image: 'sample-image-url.jpg',
  };

  const props = {
    handleEdit: handleDeleteMock,
    handleDelete: handleEditMock,
    ticket: mockTicket,
  };

  it('should be rendered', () => {
    const { asFragment } = render(<TicketsItem {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders ticket information correctly', () => {
    render(<TicketsItem {...props} />);

    const titleElement = screen.getByText(mockTicket.title);
    const customerNameElement = screen.getByText(mockTicket.customerName);
    const dateElement = screen.getByText('Oct 10, 2023');
    const priorityLabelElement = screen.getByText(mockTicket.priority);

    expect(titleElement).toBeInTheDocument();
    expect(customerNameElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(priorityLabelElement).toBeInTheDocument();
  });

  it('calls handleDelete and handleEdit when speed dial buttons are clicked', () => {
    render(<TicketsItem {...props} />);

    const deleteButton = screen.getByTestId('DeleteIcon');
    const editButton = screen.getByTestId('EditIcon');

    fireEvent.click(deleteButton);
    fireEvent.click(editButton);

    expect(handleDeleteMock).toHaveBeenCalledTimes(1);
    expect(handleEditMock).toHaveBeenCalledTimes(1);
  });
});
