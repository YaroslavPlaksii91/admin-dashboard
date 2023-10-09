import { render, screen, cleanup } from '@testing-library/react';

import { ErrorBoundary } from '../ErrorBoundary';

describe('ErrorBoundary component', () => {
  afterEach(cleanup);

  it('makes snapshot', () => {
    const { asFragment } = render(
      <ErrorBoundary>
        <div>Child Component</div>
      </ErrorBoundary>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Child Component</div>
      </ErrorBoundary>,
    );

    const childElement = screen.getByText('Child Component');

    expect(childElement).toBeInTheDocument();
  });

  it('renders error message when there is an error', () => {
    const ErrorThrower = () => {
      throw new Error('Test Error');
    };

    render(
      <ErrorBoundary>
        <ErrorThrower />
      </ErrorBoundary>,
    );

    const errorMessage = screen.getByText('Something went wrong!');

    expect(errorMessage).toBeInTheDocument();
  });
});
