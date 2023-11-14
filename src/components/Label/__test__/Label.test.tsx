import { cleanup, render, screen } from '@testing-library/react';

import { Label } from '../Label';

import { LABEL_COLORS, LABEL_TYPES } from '../constants';

describe('Label component', () => {
  afterEach(cleanup);

  const text = 'Label';

  it('should be rendered in the document', () => {
    render(
      <Label
        color={LABEL_COLORS.DEFAULT}
        type={LABEL_TYPES.ROUND}
        text={text}
      />,
    );

    const labelElement = screen.getByText(text);

    expect(labelElement).toBeInTheDocument();
  });

  it('should have correct text content', () => {
    render(
      <Label
        color={LABEL_COLORS.DEFAULT}
        type={LABEL_TYPES.ROUND}
        text={text}
      />,
    );

    const labelElement = screen.getByText(text);

    expect(labelElement).toHaveTextContent(text);
  });
});
