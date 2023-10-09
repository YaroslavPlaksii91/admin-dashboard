import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { CheckboxComponent } from '../Checkbox';
import { CHECKBOX_TEST_ID } from '../constants';

describe('Checkbox component', () => {
  afterEach(cleanup);

  it('should be rendered', () => {
    const { asFragment } = render(<CheckboxComponent />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    render(<CheckboxComponent />);

    const checkboxElement = screen.getByTestId(CHECKBOX_TEST_ID);

    expect(checkboxElement).toBeInTheDocument();
  });

  it('toggles the checkbox when clicked', () => {
    render(<CheckboxComponent />);

    const checkboxElement = screen.getByTestId(CHECKBOX_TEST_ID);

    expect(checkboxElement).not.toHaveClass('Mui-checked');

    fireEvent.click(checkboxElement);

    expect(checkboxElement).toHaveClass('Mui-checked');
  });
});
