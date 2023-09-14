import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { LoginForm } from '../LoginForm';

const navigate = jest.fn();

jest.mock('react-router', () => ({
  useNavigate: () => navigate,
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

  it('submits the form with valid data', async () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByText('Log In');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    fireEvent.click(submitButton);
  });
});
