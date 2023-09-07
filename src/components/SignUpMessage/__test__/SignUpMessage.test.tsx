import { MemoryRouter } from 'react-router-dom';
import { cleanup, render, screen } from '@testing-library/react';

import { ROUTES } from '@routes/constants';
import { SignUpMessage } from '../SignUpMessage';

describe('SignUpMessage component', () => {
  afterEach(cleanup);

  it('should be rendered', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SignUpMessage />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have correct text', () => {
    const text = "Don't have an account?";

    render(
      <MemoryRouter>
        <SignUpMessage />
      </MemoryRouter>,
    );

    const message = screen.getByText(text);

    expect(message).toBeInTheDocument();
  });

  it('should contain link to register page', () => {
    render(
      <MemoryRouter>
        <SignUpMessage />
      </MemoryRouter>,
    );

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', ROUTES.REGISTER_PAGE);
  });
});
