import { MemoryRouter } from 'react-router-dom';
import { cleanup, render, screen } from '@testing-library/react';

import { Link } from '../Link';

describe('render', () => {
  afterEach(cleanup);

  const text = 'Link';
  const url = '/link';

  it('link component', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Link text={text} url={url} />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Link', () => {
  afterEach(cleanup);

  const text = 'Link';
  const url = '/link';

  it('should be in the document', () => {
    render(
      <MemoryRouter>
        <Link text={text} url={url} />
      </MemoryRouter>,
    );

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });

  it('should have correct url address', () => {
    render(
      <MemoryRouter>
        <Link text={text} url={url} />
      </MemoryRouter>,
    );

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', url);
  });

  it('should have correct text', () => {
    render(
      <MemoryRouter>
        <Link text={text} url={url} />
      </MemoryRouter>,
    );

    const link = screen.getByText(text);

    expect(link).toBeInTheDocument();
  });
});
