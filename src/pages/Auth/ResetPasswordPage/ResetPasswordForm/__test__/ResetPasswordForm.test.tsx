import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';

import { confirmThePasswordReset } from '@services/firebase/firebase';

import { ResetPasswordForm } from '../ResetPasswordForm';

jest.mock('react-router-dom', () => ({
  useSearchParams: () => {
    const searchParams = new URLSearchParams();
    searchParams.get = jest.fn(name => {
      if (name === 'oobCode') {
        return 'oobCode';
      }
      return null;
    });
    return [searchParams, jest.fn()];
  },
}));

jest.mock('@services/firebase/firebase', () => ({
  confirmThePasswordReset: jest.fn(),
}));

describe('ResetPasswordForm', () => {
  afterEach(cleanup);

  it('should be rendered', () => {
    const { asFragment } = render(<ResetPasswordForm />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders reset password form correctly', () => {
    render(<ResetPasswordForm />);

    const passwordInput = screen.getByLabelText('new password');
    const confirmPasswordInput = screen.getByLabelText('confirm new password');
    const submitButton = screen.getByRole('button', { name: 'Send' });

    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('submits successfully', async () => {
    render(<ResetPasswordForm />);

    const passwordInput = screen.getByLabelText('new password');
    const confirmPasswordInput = screen.getByLabelText('confirm new password');
    const submitButton = screen.getByRole('button', { name: 'Send' });

    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'password' },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(confirmThePasswordReset).toHaveBeenCalledWith(
        'oobCode',
        'password',
      );
    });
  });

  it('validates the form', async () => {
    render(<ResetPasswordForm />);

    const passwordInput = screen.getByLabelText('new password');
    const confirmPasswordInput = screen.getByLabelText('confirm new password');
    const submitButton = screen.getByRole('button', { name: 'Send' });

    fireEvent.change(passwordInput, { target: { value: 'pass' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'pass' },
    });

    expect(
      screen.queryByText('Password must be at least 6 characters'),
    ).not.toBeInTheDocument();

    fireEvent.click(submitButton);

    (
      await screen.findAllByText('Password must be at least 6 characters')
    ).forEach(message => expect(message).toBeInTheDocument());

    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: '' },
    });

    expect(screen.queryByText('Password is required')).not.toBeInTheDocument();

    fireEvent.click(submitButton);

    (await screen.findAllByText('Password is required')).forEach(message =>
      expect(message).toBeInTheDocument(),
    );
  });

  it('compares passwords', async () => {
    render(<ResetPasswordForm />);

    const passwordInput = screen.getByLabelText('new password');
    const confirmPasswordInput = screen.getByLabelText('confirm new password');
    const submitButton = screen.getByRole('button', { name: 'Send' });

    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'password123' },
    });

    expect(
      screen.queryByText('Passwords do not match'),
    ).not.toBeInTheDocument();

    fireEvent.click(submitButton);

    expect(
      await screen.findByText('Passwords do not match'),
    ).toBeInTheDocument();
  });
});
