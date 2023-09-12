import { cleanup, render, screen } from '@testing-library/react';

import { AuthMain } from '../AuthMain';

describe('AuthMain component', () => {
  afterEach(cleanup);

  const text = 'Content';
  const Content = () => <div>{text}</div>;

  it('should be rendered', () => {
    const { asFragment } = render(
      <AuthMain>
        <Content />
      </AuthMain>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders children', () => {
    render(
      <AuthMain>
        <Content />
      </AuthMain>,
    );

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
