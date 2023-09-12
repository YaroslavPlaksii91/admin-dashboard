import { cleanup, render, screen } from '@testing-library/react';

import { LoginForm } from '../LoginForm';

jest.mock('react-router', () => ({
  useNavigate: () => jest.fn(),
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
});
