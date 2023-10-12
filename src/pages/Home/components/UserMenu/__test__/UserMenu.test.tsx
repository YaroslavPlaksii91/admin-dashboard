import { Dispatch, SetStateAction } from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { User } from 'firebase/auth';

import { ROUTES } from '@routes/constants';
// import { endSession } from '@services/localeStorage/localeStorage';

import { UserMenu } from '../UserMenu';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => navigate,
}));

jest.mock('@services/localeStorage/localeStorage', () => ({
  endSession: jest.fn(),
}));

jest.mock('@services/firebase/firebase', () => ({
  initAuthStateListener: (
    setCurrentUser: Dispatch<SetStateAction<User | null>>,
  ) => {
    setCurrentUser({ displayName: 'John Doe' } as User);
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
    const logoutButton = screen.queryByText('Logout');

    expect(userName).toBeInTheDocument();
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
    fireEvent.click(logoutButton);

    // expect(endSession).toHaveBeenCalled();

    expect(navigate).toHaveBeenCalledWith(ROUTES.LOGIN_PAGE);
  });
});
