import { cleanup, render, screen } from '@testing-library/react';

import { TextCell } from '../TextCell';

describe('TextCell component', () => {
  afterEach(cleanup);

  const text = 'Main Text';
  const subtext = 'Sub Text';

  it('should be rendered', () => {
    const { asFragment } = render(<TextCell text={text} subtext={subtext} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders text and subtext correctly', () => {
    render(<TextCell text={text} subtext={subtext} />);

    const mainTextElement = screen.getByText(text);
    const subTextElement = screen.getByText(subtext);

    expect(mainTextElement).toBeInTheDocument();
    expect(subTextElement).toBeInTheDocument();
  });

  it('applies styles correctly', () => {
    render(<TextCell text={text} subtext={subtext} />);

    const mainTextElement = screen.getByText(text);
    const subTextElement = screen.getByText(subtext);

    expect(mainTextElement).toHaveStyle('font-size: 14px');
    expect(mainTextElement).toHaveStyle('font-weight: 600');
    expect(subTextElement).toHaveStyle('color: additionalInfoColor');
  });
});
