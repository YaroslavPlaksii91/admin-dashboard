import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';

import { createUser } from '@services/firebase/firebase';

import { RegisterForm } from '../RegisterForm';

jest.mock('react-router', () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock('@services/firebase/firebase', () => ({
  createUser: jest.fn(),
}));

describe('RegisterForm', () => {
  afterEach(cleanup);

  it('should be rendered', () => {
    const { asFragment } = render(<RegisterForm />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders register form correctly', () => {
    render(<RegisterForm />);

    const emailInput = screen.getByLabelText('Email');
    const firstNameInput = screen.getByLabelText('first name');
    const lastNameInput = screen.getByLabelText('last name');
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('confirm password');
    const submitButton = screen.getByRole('button', { name: 'Register' });

    expect(emailInput).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('submits successfully', async () => {
    render(<RegisterForm />);

    const emailInput = screen.getByLabelText('Email');
    const firstNameInput = screen.getByLabelText('first name');
    const lastNameInput = screen.getByLabelText('last name');
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('confirm password');
    const submitButton = screen.getByRole('button', { name: 'Register' });

    fireEvent.change(emailInput, { target: { value: 'example@mail.com' } });
    fireEvent.change(firstNameInput, {
      target: { value: 'John' },
    });
    fireEvent.change(lastNameInput, {
      target: { value: 'Doe' },
    });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'password' },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(createUser).toHaveBeenCalledWith('example@mail.com', 'password');
    });
  });

  it('validates the form', async () => {
    render(<RegisterForm />);

    const emailInput = screen.getByLabelText('Email');
    const firstNameInput = screen.getByLabelText('first name');
    const lastNameInput = screen.getByLabelText('last name');
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('confirm password');
    const submitButton = screen.getByRole('button', { name: 'Register' });

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(firstNameInput, { target: { value: 'j' } });
    fireEvent.change(lastNameInput, { target: { value: 'd' } });
    fireEvent.change(passwordInput, { target: { value: 'pass' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'pas' } });

    const errorEmailMessage = screen.queryByText('Invalid email address');
    const errorFirstNameMessage = screen.queryByText(
      'First name must be at least 2 characters',
    );
    const errorLastNameMessage = screen.queryByText(
      'Last name must be at least 2 characters',
    );
    const errorPasswordMessage = screen.queryByText(
      'Password must be at least 6 characters',
    );
    const errorConfirmPasswordMessage = screen.queryByText(
      'Passwords do not match',
    );

    expect(errorEmailMessage).not.toBeInTheDocument();
    expect(errorFirstNameMessage).not.toBeInTheDocument();
    expect(errorLastNameMessage).not.toBeInTheDocument();
    expect(errorPasswordMessage).not.toBeInTheDocument();
    expect(errorConfirmPasswordMessage).not.toBeInTheDocument();

    fireEvent.click(submitButton);

    expect(
      await screen.findByText('Invalid email address'),
    ).toBeInTheDocument();
    expect(
      await screen.findByText('First name must be at least 2 characters'),
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Last name must be at least 2 characters'),
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Password must be at least 6 characters'),
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Passwords do not match'),
    ).toBeInTheDocument();
  });

  it('will not be submitted if the fields are empty', async () => {
    render(<RegisterForm />);

    const submitButton = screen.getByRole('button', { name: 'Register' });

    expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
    expect(
      screen.queryByText('First name is required'),
    ).not.toBeInTheDocument();
    expect(screen.queryByText('Last name is required')).not.toBeInTheDocument();
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument();

    fireEvent.click(submitButton);

    expect(await screen.findByText('Email is required')).toBeInTheDocument();
    expect(
      await screen.findByText('First name is required'),
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Last name is required'),
    ).toBeInTheDocument();
    (await screen.findAllByText('Password is required')).forEach(message =>
      expect(message).toBeInTheDocument(),
    );
  });
});
