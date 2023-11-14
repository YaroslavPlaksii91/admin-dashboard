import { cleanup, render, screen } from '@testing-library/react';
import { FieldErrors, FieldError } from 'react-hook-form';

import { DatePicker } from '../DatePicker';

describe('DatePicker component', () => {
  afterEach(cleanup);

  const label = 'Label';
  const name = 'datePicker';
  const errors = {};
  const field = {};
  const isDisabled = false;

  it('should be rendered', () => {
    const { asFragment } = render(
      <DatePicker
        label={label}
        name={name}
        errors={errors}
        field={field}
        disabled={isDisabled}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    render(
      <DatePicker
        label={label}
        name={name}
        errors={errors}
        field={field}
        disabled={isDisabled}
      />,
    );

    const datePickerLabel = screen.getByLabelText(label);
    const datePickerInput = screen.getByRole('textbox', { name: label });

    expect(datePickerLabel).toBeInTheDocument();
    expect(datePickerInput).toBeInTheDocument();
  });

  it('displays error message when there are errors', () => {
    const errorMessage = 'Invalid date';
    const errors: FieldErrors = {
      [name]: { message: errorMessage } as FieldError,
    };

    render(
      <DatePicker
        label={label}
        name={name}
        errors={errors}
        field={field}
        disabled={isDisabled}
      />,
    );

    const errorText = screen.getByText(errorMessage);

    expect(errorText).toBeInTheDocument();
  });

  it('disables the date picker when disabled prop is true', () => {
    const disabled = true;

    render(
      <DatePicker
        label={label}
        name={name}
        errors={errors}
        field={field}
        disabled={disabled}
      />,
    );

    const datePickerInput = screen.getByRole('textbox', { name: label });

    expect(datePickerInput).toBeDisabled();
  });
});
