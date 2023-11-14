import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';

import { TicketsForm } from '../TicketsForm';

describe('TicketsForm component', () => {
  afterEach(cleanup);

  const addTicketMock = jest.fn();
  const editTicketMock = jest.fn();

  it('should be rendered', () => {
    const { asFragment } = render(
      <TicketsForm addTicket={addTicketMock} editTicket={editTicketMock} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders form fields correctly', () => {
    render(
      <TicketsForm addTicket={addTicketMock} editTicket={editTicketMock} />,
    );

    const titleField = screen.getByLabelText('Ticket details');
    const nameField = screen.getByLabelText('Customer name');
    const dateField = screen.getByLabelText('Date');
    const priorityField = screen.getByLabelText('Priority');

    expect(titleField).toBeInTheDocument();
    expect(nameField).toBeInTheDocument();
    expect(dateField).toBeInTheDocument();
    expect(priorityField).toBeInTheDocument();
  });

  it('displays validation error messages', async () => {
    render(
      <TicketsForm addTicket={addTicketMock} editTicket={editTicketMock} />,
    );

    const titleField = screen.getByLabelText('Ticket details');
    const nameField = screen.getByLabelText('Customer name');
    const submitBtn = screen.getByRole('button', { name: 'Save' });

    fireEvent.change(titleField, { target: { value: '' } });
    fireEvent.change(nameField, { target: { value: 'A' } });

    fireEvent.click(submitBtn);

    await waitFor(() => {
      const titleError = screen.getByText('Title is required');
      const nameError = screen.getByText('Name must be at least 2 characters');

      expect(titleError).toBeInTheDocument();
      expect(nameError).toBeInTheDocument();
    });
  });
});
