import { ReactNode } from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { ROUTES } from '@routes/constants';

import { LoginPage } from '../LoginPage';
import { LOGIN_FORM_TEST_ID } from '../LoginForm/constants';

jest.mock('@services/firebase/firebase', () => ({
  signInUser: jest.fn(),
}));

jest.mock('react-router', () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock('@components/Link/Link', () => ({
  Link: ({ children, url }: { children: ReactNode; url: string }) => (
    <a href={url}>{children}</a>
  ),
}));

describe('LoginPage', () => {
  afterEach(cleanup);

  it('should be rendered', () => {
    const { asFragment } = render(<LoginPage />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders login page correctly', () => {
    render(<LoginPage />);

    const title = screen.getByText('Log In to Dashboard Kit');
    const subtitle = screen.getByText('Enter your email and password');
    const loginForm = screen.getByTestId(LOGIN_FORM_TEST_ID);
    const forgotPasswordLink = screen.getByText('Forgot password?');
    const signUpText = screen.getByText("Don't have an account?");
    const signUpLink = screen.getByText('Sign up');

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(loginForm).toBeInTheDocument();
    expect(forgotPasswordLink).toBeInTheDocument();
    expect(forgotPasswordLink).toHaveAttribute(
      'href',
      ROUTES.FORGOT_PASSWORD_PAGE,
    );
    expect(signUpText).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
    expect(signUpLink).toHaveAttribute('href', ROUTES.REGISTER_PAGE);
  });
});
