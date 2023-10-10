import { render, cleanup, fireEvent, screen } from '@testing-library/react';

import { ADD_BTN_TEST_ID } from '@pages/Home/components/ActionButtons/constants';

import { Contacts } from '../Contacts';

jest.mock('@services/db/contacts', () => ({
  getContacts: jest.fn(() => Promise.resolve([])),
  createContact: jest.fn(newContact => Promise.resolve(newContact)),
  deleteContact: jest.fn(contactId => Promise.resolve(contactId)),
  editContact: jest.fn((_, updatedData) => Promise.resolve(updatedData)),
}));

jest.mock('@services/date/formatDate', () => ({
  formatDate: jest.fn(date => ({ date })),
}));

describe('Contacts component', () => {
  afterEach(cleanup);

  it('should be rendered', () => {
    const { asFragment } = render(<Contacts />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('opens the modal when "Add contact" button is clicked', () => {
    render(<Contacts />);

    fireEvent.click(screen.getByTestId(ADD_BTN_TEST_ID));

    expect(screen.getByText('Add new contact')).toBeInTheDocument();
  });
});
