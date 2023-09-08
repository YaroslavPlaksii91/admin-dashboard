import { cleanup, render, screen } from '@testing-library/react';

import { AUTH_CONTAINER_TEST_ID } from '../constants';
import { AuthContainer } from '../AuthContainer';

describe('AuthContainer component', () => {
  afterEach(cleanup);

  const MockedChildren = () => <div>Mocked Children</div>;

  it('should render AuthContainer component', () => {
    const { asFragment } = render(
      <AuthContainer>
        <MockedChildren />
      </AuthContainer>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be in the document', () => {
    render(
      <AuthContainer>
        <MockedChildren />
      </AuthContainer>,
    );

    expect(screen.getByTestId(AUTH_CONTAINER_TEST_ID)).toBeInTheDocument();
  });

  it('children should be in the document', () => {
    render(
      <AuthContainer>
        <MockedChildren />
      </AuthContainer>,
    );

    expect(screen.getByText('Mocked Children')).toBeInTheDocument();
  });
});
