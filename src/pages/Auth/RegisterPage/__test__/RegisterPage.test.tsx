import { cleanup, render, screen } from '@testing-library/react';

import { RegisterPage } from '../RegisterPage';
import { REGISTER_FORM_TEST_ID } from '../RegisterForm/constants';

jest.mock('@services/firebase/firebase', () => ({
  createUser: jest.fn(),
}));

jest.mock('react-router', () => ({
  useNavigate: () => jest.fn(),
}));

describe('RegisterPage', () => {
  afterEach(cleanup);

  it('should be rendered', () => {
    const { asFragment } = render(<RegisterPage />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders register page correctly', () => {
    render(<RegisterPage />);

    const title = screen.getByText('Sign Up');
    const subtitle = screen.getByText('Create a new account');
    const registerForm = screen.getByTestId(REGISTER_FORM_TEST_ID);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(registerForm).toBeInTheDocument();
  });
});
