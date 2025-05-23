import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';

import { signInUser } from '@services/firebase/firebase';

import { LoginForm } from '../LoginForm';

jest.mock('react-router', () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock('@services/firebase/firebase', () => ({
  signInUser: jest.fn(),
}));

describe('LoginForm', () => {
  afterEach(cleanup);

  it('should be rendered', () => {
    const { asFragment } = render(<LoginForm />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders login form correctly', () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Log In' });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('submits successfully', async () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Log In' });

    fireEvent.change(emailInput, { target: { value: 'example@mail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(signInUser).toHaveBeenCalledWith('example@mail.com', 'password');
    });
  });

  it('validates the form', async () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Log In' });

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: 'pass' } });

    const errorEmailMessage = screen.queryByText('Invalid email address');
    const errorPasswordMessage = screen.queryByText(
      'Password must be at least 6 characters',
    );

    expect(errorEmailMessage).not.toBeInTheDocument();
    expect(errorPasswordMessage).not.toBeInTheDocument();

    fireEvent.click(submitButton);

    expect(
      await screen.findByText('Invalid email address'),
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Password must be at least 6 characters'),
    ).toBeInTheDocument();
  });

  it('will not be submitted if the fields are empty', async () => {
    render(<LoginForm />);

    const submitButton = screen.getByRole('button', { name: 'Log In' });

    expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument();

    fireEvent.click(submitButton);

    expect(await screen.findByText('Email is required')).toBeInTheDocument();
    expect(await screen.findByText('Password is required')).toBeInTheDocument();
  });
});
