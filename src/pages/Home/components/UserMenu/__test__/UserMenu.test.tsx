import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { ROUTES } from '@routes/constants';
import * as localeStorage from '@services/localeStorage/localeStorage';

import { UserMenu } from '../UserMenu';

const navigate = jest.fn();

jest.mock('react-router', () => ({
  useNavigate: () => navigate,
}));

jest.mock('@services/localeStorage', () => ({
  getCurrentUser: () => ({
    email: 'test@example.com',
    firstName: 'John',
    lastName: 'Doe',
    password: 'password',
    confirmPassword: 'password',
    isLoggedIn: true,
  }),
  setIsLoggedIn: jest.fn(),
}));

describe('User menu component', () => {
  afterEach(cleanup);

  it('should be rendered', () => {
    const { asFragment } = render(<UserMenu />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    render(<UserMenu />);

    const userName = screen.getByText('John Doe');
    const userPhoto = screen.getByAltText("User's photo");

    expect(userName).toBeInTheDocument();
    expect(userPhoto).toBeInTheDocument();
  });

  it('logout button is not in the document', () => {
    render(<UserMenu />);

    const logoutButton = screen.queryByText('Logout');

    expect(logoutButton).not.toBeInTheDocument();
  });

  it('displays logout button when icon is clicked', () => {
    render(<UserMenu />);

    const icon = screen.getByAltText("User's photo");

    fireEvent.click(icon);

    const logoutButton = screen.getByText('Logout');

    expect(logoutButton).toBeInTheDocument();
  });

  it('handles logout click', () => {
    render(<UserMenu />);

    const icon = screen.getByAltText("User's photo");
    fireEvent.click(icon);

    const logoutButton = screen.getByText('Logout');

    fireEvent.click(logoutButton);

    expect(localeStorage.setIsLoggedIn).toHaveBeenCalledWith(
      'test@example.com',
    );
    expect(navigate).toHaveBeenCalledWith(ROUTES.LOGIN_PAGE);
  });
});
