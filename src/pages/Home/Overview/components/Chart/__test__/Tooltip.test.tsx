import { render, screen } from '@testing-library/react';

import { CustomTooltip } from '../Tooltip';
import { TOOLTIP_TEST_ID } from '../constants';

describe('CustomTooltip component', () => {
  const payload = [{ value: '5' }, { value: '10' }];

  it('makes snapshot', () => {
    const { asFragment } = render(
      <CustomTooltip active={true} payload={payload} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render when active and payload is provided', () => {
    render(<CustomTooltip active={true} payload={payload} />);

    const svgIcon = screen.getByTestId(TOOLTIP_TEST_ID);
    expect(svgIcon).toBeInTheDocument();

    const textElement = screen.getByText('10');
    expect(textElement).toBeInTheDocument();
  });

  it('should not render when active is false', () => {
    render(<CustomTooltip active={false} payload={[]} />);

    const svgIcon = screen.queryByTestId(TOOLTIP_TEST_ID);
    expect(svgIcon).not.toBeInTheDocument();
  });

  it('should not render when payload is empty', () => {
    render(<CustomTooltip active={true} payload={[]} />);

    const svgIcon = screen.queryByTestId(TOOLTIP_TEST_ID);
    expect(svgIcon).not.toBeInTheDocument();
  });
});
