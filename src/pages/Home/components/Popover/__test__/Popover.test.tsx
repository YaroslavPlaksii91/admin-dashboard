import { cleanup, render, screen } from '@testing-library/react';

import { Popover } from '../Popover';
import { POPOVER_TEST_ID } from '../constants';

describe('Popover component', () => {
  afterEach(cleanup);

  const id = 'popover';
  const open = true;
  const anchorEl = null;
  const handleClose = jest.fn();

  it('makes snapshot', () => {
    const { asFragment } = render(
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      >
        <div>Popover Content</div>
      </Popover>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be rendered correctly', () => {
    render(
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      >
        <div>Popover Content</div>
      </Popover>,
    );

    const popover = screen.getByTestId(POPOVER_TEST_ID);
    const content = screen.getByText('Popover Content');

    expect(popover).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
