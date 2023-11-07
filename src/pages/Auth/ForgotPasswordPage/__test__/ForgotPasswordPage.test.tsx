import { ReactNode } from 'react';
import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';

import { ROUTES } from '@routes/constants';

import { ForgotPasswordPage } from '../ForgotPasswordPage';
import { FORGOT_PASSWORD_FORM_TEST_ID } from '../ForgotPasswordForm/constants';

jest.mock('@services/firebase/firebase', () => ({
  sendResetEmail: jest.fn(),
}));

jest.mock('@components/Link/Link', () => ({
  Link: ({ children, url }: { children: ReactNode; url: string }) => (
    <a href={url}>{children}</a>
  ),
}));

describe('ForgotPasswordPage', () => {
  afterEach(cleanup);

  it('should be rendered', () => {
    const { asFragment } = render(<ForgotPasswordPage />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders forgot password page correctly', () => {
    render(<ForgotPasswordPage />);

    const title = screen.getByText('Forgot password?');
    const subtitle = screen.getByText(
      'Enter your email from registered account',
    );
    const forgotPasswordForm = screen.getByTestId(FORGOT_PASSWORD_FORM_TEST_ID);
    const signUpText = screen.getByText("Don't have an account?");
    const signUpLink = screen.getByText('Sign up');

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(forgotPasswordForm).toBeInTheDocument();
    expect(signUpText).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
    expect(signUpLink).toHaveAttribute('href', ROUTES.REGISTER_PAGE);
  });

  it('should change view after submit', async () => {
    render(<ForgotPasswordPage />);

    const emailInput = screen.getByLabelText('Email');
    const submitButton = screen.getByRole('button', { name: 'Send' });

    fireEvent.change(emailInput, {
      target: { value: 'example@mail.com' },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      const title = screen.getByText('Forgot password?');
      const text = screen.getByText(
        'Link to change your password has been sent to provided email if we have it inside our system',
      );
      const forgotPasswordForm = screen.queryByTestId(
        FORGOT_PASSWORD_FORM_TEST_ID,
      );
      const signUpText = screen.queryByText("Don't have an account?");
      const signUpLink = screen.queryByText('Sign up');

      expect(title).toBeInTheDocument();
      expect(text).toBeInTheDocument();
      expect(forgotPasswordForm).not.toBeInTheDocument();
      expect(signUpText).not.toBeInTheDocument();
      expect(signUpLink).not.toBeInTheDocument();
    });
  });
});
