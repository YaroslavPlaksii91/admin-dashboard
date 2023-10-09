import { cleanup, render, screen } from '@testing-library/react';

import { Label } from '../Label';

import { LABEL_COLORS, LABEL_TYPES } from '../constants';

describe('Label component', () => {
  afterEach(cleanup);

  it('should be rendered', () => {
    const { asFragment } = render(
      <Label
        color={LABEL_COLORS.DEFAULT}
        type={LABEL_TYPES.ROUND}
        text="Label"
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with the correct text', () => {
    render(
      <Label
        color={LABEL_COLORS.DEFAULT}
        type={LABEL_TYPES.ROUND}
        text="Label"
      />,
    );

    const labelElement = screen.getByText('Label');

    expect(labelElement).toBeInTheDocument();
  });
});
