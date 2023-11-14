import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Sidebar } from '../Sidebar';
import { SIDEBAR_LINK_TEST_ID } from '../constants';

describe('Sidebar component', () => {
  afterEach(cleanup);

  it('should be rendered', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>,
    );

    const logo = screen.getByText('Dashboard Kit');
    expect(logo).toBeInTheDocument();

    const links = screen.getAllByTestId(SIDEBAR_LINK_TEST_ID);

    links.forEach(link => {
      expect(link).toBeInTheDocument();
    });
  });
});
