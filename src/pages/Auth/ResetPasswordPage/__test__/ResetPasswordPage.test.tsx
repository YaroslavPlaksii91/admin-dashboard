import { cleanup, render, screen } from '@testing-library/react';

import { ROUTES } from '@routes/constants';

import { ResetPasswordPage } from '../ResetPasswordPage';
import { RESET_PASSWORD_FORM_TEST_ID } from '../ResetPasswordForm/constants';

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

jest.mock('@components/Link/Link', () => ({
  Link: ({ children, url }: { children: React.ReactNode; url: string }) => (
    <a href={url}>{children}</a>
  ),
}));

describe('ResetPasswordPage', () => {
  afterEach(cleanup);

  it('should be rendered', () => {
    const { asFragment } = render(<ResetPasswordPage />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders register page correctly', () => {
    render(<ResetPasswordPage />);

    const title = screen.getByText('Reset Password');
    const subtitle = screen.getByText('Enter new password');
    const resetPasswordForm = screen.getByTestId(RESET_PASSWORD_FORM_TEST_ID);
    const signUpText = screen.getByText("Don't have an account?");
    const signUpLink = screen.getByText('Sign up');

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(resetPasswordForm).toBeInTheDocument();
    expect(signUpText).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
    expect(signUpLink).toHaveAttribute('href', ROUTES.REGISTER_PAGE);
  });
});
