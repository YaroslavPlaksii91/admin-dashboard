import { cleanup, render, screen } from '@testing-library/react';

import { LOGO_TYPES } from '../constants';
import { Logo } from '../Logo';

describe('Logo component', () => {
  afterEach(cleanup);

  it('should render Logo component with vertical type', () => {
    const { asFragment } = render(<Logo type={LOGO_TYPES.VERTICAL} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render Logo component with horizontal type', () => {
    const { asFragment } = render(<Logo type={LOGO_TYPES.HORIZONTAL} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be in the document', () => {
    render(<Logo />);

    const logoIcon = screen.getByRole('img');
    const logoText = screen.getByText('Dashboard Kit');

    expect(logoIcon).toBeInTheDocument();
    expect(logoText).toBeInTheDocument();
  });
});
