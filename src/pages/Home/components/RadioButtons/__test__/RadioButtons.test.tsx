import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { RadioButtons } from '../RadioButtons';

const handleChange = jest.fn();
const options = ['Option 1', 'Option 2', 'Option 3'];
const value = 'Option 1';
const title = 'Title';

describe('RadioButtons component', () => {
  afterEach(cleanup);

  it('should be rendered', () => {
    const { asFragment } = render(
      <RadioButtons
        title={title}
        options={options}
        value={value}
        handleChange={handleChange}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    render(
      <RadioButtons
        title={title}
        options={options}
        value={value}
        handleChange={handleChange}
      />,
    );

    const titleLabel = screen.getByLabelText(title);
    expect(titleLabel).toBeInTheDocument();

    options.forEach(option => {
      const radioLabel = screen.getByLabelText(option);
      expect(radioLabel).toBeInTheDocument();
    });
  });

  it('handles change correctly', () => {
    render(
      <RadioButtons
        title={title}
        options={options}
        value={value}
        handleChange={handleChange}
      />,
    );

    const option2Radio = screen.getByLabelText(options[1]);
    fireEvent.click(option2Radio);

    expect(handleChange).toHaveBeenCalled();
  });
});
