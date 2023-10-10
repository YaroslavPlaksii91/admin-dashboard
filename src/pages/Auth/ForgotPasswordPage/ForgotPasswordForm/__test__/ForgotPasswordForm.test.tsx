import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';

import { ForgotPasswordForm } from '../ForgotPasswordForm';
import { FORGOT_PASSWORD_FORM_TEST_ID } from '../constants';

jest.mock('@services/firebase/firebase', () => ({
  signInUser: jest.fn(),
}));

const onSubmit = jest.fn();

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: () => ({
    register: jest.fn(),
    handleSubmit: onSubmit,
    formState: { errors: {} },
  }),
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

    expect(
      screen.getByTestId(FORGOT_PASSWORD_FORM_TEST_ID),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument();
  });

  it('submits the form with valid email', async () => {
    render(<ForgotPasswordForm setIsSubmitted={setIsSubmitted} />);

    const emailInput = screen.getByLabelText('Email');
    const sendButton = screen.getByRole('button', { name: 'Send' });

    fireEvent.change(emailInput, {
      target: { value: 'example@example.com' },
    });

    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled();
    });
  });

  it('displays error message for invalid email', async () => {
    render(<ForgotPasswordForm setIsSubmitted={setIsSubmitted} />);

    const emailInput = screen.getByLabelText('Email');
    const sendButton = screen.getByRole('button', { name: 'Send' });

    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });

    fireEvent.click(sendButton);
  });
});
