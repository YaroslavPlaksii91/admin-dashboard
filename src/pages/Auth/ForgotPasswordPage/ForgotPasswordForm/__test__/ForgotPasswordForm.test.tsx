import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';

import { sendResetEmail } from '@services/firebase/firebase';

import { ForgotPasswordForm } from '../ForgotPasswordForm';

jest.mock('@services/firebase/firebase', () => ({
  sendResetEmail: jest.fn(),
}));

describe('ForgotPasswordForm component', () => {
  afterEach(cleanup);

  const setIsSubmitted = jest.fn();

  it('should be rendered', () => {
    const { asFragment } = render(
      <ForgotPasswordForm setIsSubmitted={setIsSubmitted} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    render(<ForgotPasswordForm setIsSubmitted={setIsSubmitted} />);

    const emailInput = screen.getByLabelText('Email');
    const submitButton = screen.getByRole('button', { name: 'Send' });

    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('submits the form with valid email', async () => {
    render(<ForgotPasswordForm setIsSubmitted={setIsSubmitted} />);

    const emailInput = screen.getByLabelText('Email');
    const submitButton = screen.getByRole('button', { name: 'Send' });

    fireEvent.change(emailInput, {
      target: { value: 'example@mail.com' },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(sendResetEmail).toHaveBeenCalledWith('example@mail.com');
    });
  });

  it('displays error message for invalid email', async () => {
    render(<ForgotPasswordForm setIsSubmitted={setIsSubmitted} />);

    const emailInput = screen.getByLabelText('Email');
    const submitButton = screen.getByRole('button', { name: 'Send' });

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

    const errorMessage = screen.queryByText('Invalid email address');
    expect(errorMessage).not.toBeInTheDocument();

    fireEvent.click(submitButton);

    expect(
      await screen.findByText('Invalid email address'),
    ).toBeInTheDocument();
  });

  it('will not be submitted if email is empty string', async () => {
    render(<ForgotPasswordForm setIsSubmitted={setIsSubmitted} />);

    const submitButton = screen.getByRole('button', { name: 'Send' });

    const errorMessage = screen.queryByText('Email is required');
    expect(errorMessage).not.toBeInTheDocument();

    fireEvent.click(submitButton);

    expect(await screen.findByText('Email is required')).toBeInTheDocument();
  });
});
