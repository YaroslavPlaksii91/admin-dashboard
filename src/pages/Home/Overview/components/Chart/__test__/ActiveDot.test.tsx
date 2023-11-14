import { render } from '@testing-library/react';

import { ActiveDot } from '../ActiveDot';

describe('ActiveDot component', () => {
  const cx = 50;
  const cy = 50;

  it('renders ActiveDot correctly', () => {
    const { asFragment } = render(<ActiveDot cx={cx} cy={cy} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with correct props', () => {
    const { container } = render(<ActiveDot cx={cx} cy={cy} />);

    const circleElements = container.querySelectorAll('circle');
    expect(circleElements).toHaveLength(2);

    const outerCircle = circleElements[0];
    expect(outerCircle.getAttribute('cx')).toBe(cx.toString());
    expect(outerCircle.getAttribute('cy')).toBe(cy.toString());
    expect(outerCircle.getAttribute('r')).toBe('13');
    expect(outerCircle.getAttribute('stroke')).toBe('#3751FF');
    expect(outerCircle.getAttribute('stroke-width')).toBe('2');
    expect(outerCircle.getAttribute('fill')).toBe('none');

    const innerCircle = circleElements[1];
    expect(innerCircle.getAttribute('cx')).toBe(cx.toString());
    expect(innerCircle.getAttribute('cy')).toBe(cy.toString());
    expect(innerCircle.getAttribute('r')).toBe('4');
    expect(innerCircle.getAttribute('fill')).toBe('#fff');
    expect(innerCircle.getAttribute('stroke')).toBe('#3751FF');
    expect(innerCircle.getAttribute('stroke-width')).toBe('4px');
    expect(innerCircle.getAttribute('filter')).toBe(
      'drop-shadow(0px 1px 2px rgba(55, 81, 255, 0.20))',
    );
    expect(innerCircle.getAttribute('class')).toBe('recharts-dot');
  });
});
