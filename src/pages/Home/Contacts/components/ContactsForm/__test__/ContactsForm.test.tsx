import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { ContactsForm } from '../ContactsForm';

describe('ContactsForm component', () => {
  afterEach(cleanup);

  const mockAddContact = jest.fn();
  const mockEditContact = jest.fn();

  const defaultProps = {
    addContact: mockAddContact,
    editContact: mockEditContact,
  };

  it('should be rendered', () => {
    const { asFragment } = render(<ContactsForm {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    render(<ContactsForm {...defaultProps} />);

    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    expect(screen.getByLabelText('first name')).toBeInTheDocument();
    expect(screen.getByLabelText('last name')).toBeInTheDocument();
    expect(screen.getByLabelText('email')).toBeInTheDocument();
    expect(screen.getByLabelText('address')).toBeInTheDocument();
  });

  it('handles form submission correctly for adding', () => {
    render(<ContactsForm {...defaultProps} />);

    fireEvent.input(screen.getByLabelText('first name'), {
      target: { value: 'John' },
    });
    fireEvent.input(screen.getByLabelText('last name'), {
      target: { value: 'Doe' },
    });
    fireEvent.input(screen.getByLabelText('email'), {
      target: { value: 'johndoe@example.com' },
    });
    fireEvent.input(screen.getByLabelText('address'), {
      target: { value: '123 Main St' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Save' }));
  });

  it('requires a photo to be selected', () => {
    render(<ContactsForm {...defaultProps} />);

    fireEvent.input(screen.getByLabelText('first name'), {
      target: { value: 'John' },
    });
    fireEvent.input(screen.getByLabelText('last name'), {
      target: { value: 'Doe' },
    });
    fireEvent.input(screen.getByLabelText('email'), {
      target: { value: 'johndoe@example.com' },
    });
    fireEvent.input(screen.getByLabelText('address'), {
      target: { value: '123 Main St' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Save' }));

    expect(defaultProps.addContact).not.toHaveBeenCalled();
    expect(defaultProps.editContact).not.toHaveBeenCalled();
  });
});
