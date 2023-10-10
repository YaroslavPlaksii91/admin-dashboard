import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { ContactsItem } from '../ContactsItem';

describe('ContactsItem component', () => {
  afterEach(cleanup);

  const handleDelete = jest.fn();
  const handleEdit = jest.fn();
  const contact = {
    id: '1',
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main St',
    date: '2023-10-10',
    image: '/path/to/image.jpg',
  };

  const props = {
    handleDelete,
    handleEdit,
    contact,
  };

  it('should be rendered', () => {
    const { asFragment } = render(<ContactsItem {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders contact information correctly', () => {
    render(<ContactsItem {...props} />);

    const nameElement = screen.getByText(contact.name);
    const emailElement = screen.getByText(contact.email);
    const addressElement = screen.getByText(contact.address);
    const dateElement = screen.getByText('Oct 10, 2023');

    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(addressElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });

  it('renders the contact image', () => {
    render(<ContactsItem {...props} />);

    const imageElement = screen.getByAltText(contact.name);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', contact.image);
  });

  it('triggers handleDelete and handleEdit when SpeedDial buttons are clicked', () => {
    render(<ContactsItem {...props} />);

    const deleteButton = screen.getByLabelText('Delete');
    const editButton = screen.getByLabelText('Edit');

    fireEvent.click(deleteButton);
    fireEvent.click(editButton);

    expect(handleDelete).toHaveBeenCalled();
    expect(handleEdit).toHaveBeenCalled();
  });
});
