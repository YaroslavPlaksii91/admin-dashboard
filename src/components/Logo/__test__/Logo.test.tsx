import { MemoryRouter } from 'react-router-dom';
import { cleanup, render, screen } from '@testing-library/react';

import { LOGO_TYPES } from '../constants';
import { Logo } from '../Logo';

describe('Logo component', () => {
  afterEach(cleanup);

  it('should render Logo component with vertical type', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render Logo component with horizontal type', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Logo type={LOGO_TYPES.HORIZONTAL} />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be in the document', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>,
    );

    const logoIcon = screen.getByRole('img');
    const logoText = screen.getByText('Dashboard Kit');

    expect(logoIcon).toBeInTheDocument();
    expect(logoText).toBeInTheDocument();
  });
});
