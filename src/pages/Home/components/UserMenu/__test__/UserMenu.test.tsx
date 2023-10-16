import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { User } from 'firebase/auth';

import { ROUTES } from '@routes/constants';
import { authStore } from '@store/auth';

import { UserMenu } from '../UserMenu';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => navigate,
}));

jest.mock('@store/auth', () => {
  return {
    authStore: {
      isLoggedIn: false,
      user: { displayName: 'John Doe' },
      login: jest.fn(),
      logout: jest.fn(),
      setUser: jest.fn(),
    },
  };
});

jest.mock('@services/firebase/firebase', () => ({
  initAuthStateListener: () => {
    authStore.setUser({ displayName: 'John Doe' } as User);
    return jest.fn();
  },
}));

describe('UserMenu component', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const { asFragment } = render(<UserMenu />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render user name and hide logout button by default', () => {
    render(<UserMenu />);

    const userName = screen.getByText('John Doe');
    expect(userName).toBeInTheDocument();

    const logoutButton = screen.queryByText('Logout');
    expect(logoutButton).not.toBeInTheDocument();
  });

  it('should display logout button when user icon is clicked', () => {
    render(<UserMenu />);

    const userIcon = screen.getByAltText("User's photo");
    fireEvent.click(userIcon);

    const logoutButton = screen.getByText('Logout');
    expect(logoutButton).toBeInTheDocument();
  });

  it('should handle logout click', () => {
    render(<UserMenu />);

    const userIcon = screen.getByAltText("User's photo");
    fireEvent.click(userIcon);

    const logoutButton = screen.getByText('Logout');
    expect(logoutButton).toBeInTheDocument();
    fireEvent.click(logoutButton);

    expect(authStore.isLoggedIn).toBe(false);
    expect(navigate).toHaveBeenCalledWith(ROUTES.LOGIN_PAGE);
  });
});
